# Setting up Local Development Containers with TLS Certificates

Posted: June 20, 2024

Containers are an essential tool for building modern software especially for local development. I wanted to share my simple and repeatable process for creating a secure development environment using only Docker and Docker Compose for those who may be looking to secure their current local envionment or just starting out with containers.

If you have a pre-existing docker-compose.yml, you can skip to step 3 to start setting up the pre-requisite networks.

If you need a deep dive into containers, their uses, and comparison to VMs, I recommend these sources:

- <https://www.docker.com/resources/what-container/>
- <https://aws.amazon.com/compare/the-difference-between-docker-vm/>

## Docker commands

- `docker compose up` - launches the docker containers, will build them if needed.
- `docker compose up --build` - Forces a rebuild of the containers.
- `docker-compose up -d <service> <service>` will launch only those containers you specify.
- `docker ps` - provides a listing and information for all the containers running in your docker because it is used in many docker commands.
- `docker exec -it <container_name> bash` - equivalent of SSHing to the server as root and can move around the container as you would any of our live servers.

## Choosing your Docker images

The first step in setting up your development containers is selecting the appropriate Docker images. [Docker Hub](https://hub.docker.com/) provides a wide variety of images for different use cases.

- Language-Specific Images: If you are developing in a specific programming language, look for official images like python, node, ruby, java, etc.
- Framework-Specific Images: For certain frameworks, you might find specialized images, such as django for Django projects or rails for Ruby on Rails.
- Service Images: If you need databases or other unique applications, look for images like mysql, postgres, redis, apache, etc.

If I'm building a web project, I'm partial to using an apache image. Below is an example of how to pull the latest of the image.

```bash
docker pull httpd
```

The purpose of this guide is to demonstrate inter-containter communication, so you'll want to pull one or more different kinds of images. Once you have your image(s) picked out, create a new file, named docker-compose.yml, and begin editing. Docker compose instructs the docker engine how we want to use the images and with what configurations. In a Docker compose, we define a service per image. Here is a very simple Docker compose with 3 services that you can copy and update with your own image names. We will fill in and update this file for the rest of the guide.

```yaml
version: '3.2'
services:
  webserver:
    image: httpd
  apiserver:
    image: httpd
  database:
    image: mysql
```

## 2. Choosing volumes

Volumes are essential for persisting data and sharing files between your host and containers. You will need to define volumes for your project's build files and any assets.

Continuing with our web project example, I've added volumes to my respective services. webserver and apiserver require that any html and proxies files be mounted where the server will serve them to the user and other server code be mounted separately. The database service's first volume intializes a container with sql scripts that run on first load. The second volume persists the database's data between container teardowns.

```yaml
version: '3.2'
services:
  webserver:
    image: httpd
    volumes:
        - ./web_project/html:/var/www/html/web_project
        - ./web_project/includes:/var/www/includes/web_project
  apiserver:
    image: httpd
     volumes:
       - ./api_web_project/html:/var/www/html/api_web_project
        - ./api_web_project/includes:/var/www/includes/api_web_project
  database:
    image: mysql
    volumes:
        - ./containers/initdb:/docker-entrypoint-initdb.d
        - ./containers/data:/var/lib/mysql
```

## 3. Determine hostnames and ports

Next, determine the hostnames and ports you'll use for each container. This will be unique to your chosen images, and you'll need to do research on your image processes.

Contininuing with our web example, I've added hostnames and the ports on which they will listen. As you likely know, for HTTP the default port is 80 and for HTTPS it is 443. Without a reverse proxy, containers cannot utilize the same port, so we will utilize 80 and 443 ports for our webserver and 8080 and 8443 for our api server on our local machine.

```yaml
version: '3.2'
services:
  webserver:
    image: httpd
    hostname: local.megbailey.me
    ports:
      - "80:80"
      - "443:443"
    volumes:
        - ./web_project/html:/var/www/html/web_project
        - ./web_project/includes:/var/www/includes/web_project
  apiserver:
    image: httpd
    hostname: local-api.megbailey.me
    ports:
      - "8080:80"
      - "8443:443"
     volumes:
       - ./api_web_project/html:/var/www/html/api_web_project
        - ./api_web_project/includes:/var/www/includes/api_web_project
  database:
    image: mysql
    hostname: local-db.megbailey.me
    ports:
      - "3306:3306"
    volumes:
        - ./containers/initdb:/docker-entrypoint-initdb.d
        - ./containers/data:/var/lib/mysql
```

## 4. Update /etc/hosts

In order to reach these containers via hostname from your local machine, you will need to update your /etc/hosts file to loopback to localhost. Open up a terminal and `sudo vim /etc/hosts`, and update the file to include your custom hostnames.

```bash
127.0.0.1       localhost
::1             localhost
255.255.255.255 broadcasthost
127.0.0.1       local.megbailey.me
127.0.0.1       local-api.megbailey.me
127.0.0.1       local-db.megbailey.me
# Added by Docker Desktop
# To allow the same kube context to work on the host and the container:
127.0.0.1 kubernetes.docker.internal
# End of section
```

## 6. Adding networks

To enable inter-container communication, we need to a define network in the compose file and add it to each container. Containers on the same network can communicate to others their service names. Using our ongoing example, when on webserver container, you'll be able to resolve to the api server using "apiserver".

```yaml
version: '3.2'
services:
  webserver:
    image: httpd
    hostname: local.megbailey.me
    ports:
        - "80:80"
        - "443:443"
    volumes:
        - ./web_project/html:/var/www/html/web_project
        - ./web_project/includes:/var/www/includes/web_project
    networks:
        - customNetwork
  apiserver:
    image: httpd
    hostname: local-api.megbailey.me
    ports:
        - "8080:80"
        - "8443:443"
    volumes:
        - ./api_web_project/html:/var/www/html/api_web_project
        - ./api_web_project/includes:/var/www/includes/api_web_project
    networks:
        - customNetwork
  database:
    image: mysql
    hostname: local-db.megbailey.me
    ports:
      - "3306:3306"
    volumes:
        - ./containers/initdb:/docker-entrypoint-initdb.d
        - ./containers/data:/var/lib/mysql
    networks:
      - customNetwork
networks:
    customNetwork:
        ipam:
        driver: default
```

Next, we'll transition from docker setup to TLS.

## 7. Using mkcert to generate local certificates

mkcert is a tool for making locally-trusted development certificates. It makes it really easy to create a local Certificate Authority (CA) and generate local-trusted certificates that are perfect for development. Run the commands in terminal to install mkcert, install a local root CA, and print the location where the root CA was installed.

```bash
brew install mkcert
mkcert -install
mkcert -CAROOT
```

Next, we will create private keys for each container using the new root CA. For each service,

- Run `openssl genrsa -out ./CONTAINER_HOSTNAME.key 204` to generate a unique private key where CONTAINER_HOSTNAME is the hostname of the container.
- Run `openssl req -new -key ./CONTAINER_HOSTNAME.key  \
  -subj "/C=US/ST=California/L=San Diego/O=MB Development/OU=Website/CN=CONTAINER_HOSTNAME" \
  -out ./CONTAINER_HOSTNAME.csr` to generate a certificate signing request (CSR) using the key. Update 'CONTAINER_HOSTNAME' to the hostname of a container, and update the subj[ect] line for your current location and organization
- Run `mkcert -csr ./CONTAINER_HOSTNAME.csr` to create a certificate using CSR and CA.

## 8. Adding certificates to containers

Next, we need to add the generated certificates and rootCA to each container. You can accomplish this either by using volumes like in step 2 or create a new Dockerfile to configure the image more before the its used in the docker-compose. Different images have specific TLS configuration requirements which means you'll need to research how to add certs for your chosen image, but I can give a few tips.

I recommend using an additional DockerFile because we can also do any configuring that maybe application or image-specific. Volumes will put the file in the correct place, but it may persist things we don't want, we are unable to dictate the keys permissions, and we can't easily do more configuration for the volume.

Start by creating folders and Dockerfile for each unique image you're using.

```docker
FROM httpd
```

Then, update the docker compose to reference your custom build/ Dockerfile of each image. Also, add an ARG, a local variable, to each service that requires a TLS certificate. This ARG will hold the name of the certificate (without any extensions like .pem, .crt, etc). My TLS artifacts almost always the same name as the hostname of the machine, but yours will be different if you decided not use the container hostname in step 7.

```yaml
version: '3.2'
services:
  webserver:
    build:
      context: ../httpd
      args:
        TLSFilename: local.megbailey.me
    hostname: local.megbailey.me
    ports:
        - "80:80"
        - "443:443"
    volumes:
        - ./web_project/html:/var/www/html/web_project
        - ./web_project/includes:/var/www/includes/web_project
    networks:
        - customNetwork
  apiserver:
    build:
      context: ../httpd
      args:
        TLSFilename: local-api.megbailey.me
    hostname: local-api.megbailey.me
    ports:
        - "8080:80"
        - "8443:443"
    volumes:
        - ./api_web_project/html:/var/www/html/api_web_project
        - ./api_web_project/includes:/var/www/includes/api_web_project
    networks:
        - customNetwork
  database:
    image: mysql
    hostname: local-db.megbailey.me
    ports:
      - "3306:3306"
    volumes:
        - ./containers/initdb:/docker-entrypoint-initdb.d
        - ./containers/data:/var/lib/mysql
    networks:
      - customNetwork
networks:
    customNetwork:
        ipam:
        driver: default
```

Now, within the Dockerfile for each image, You can use the ARG TLSFilename to copy the cert for each container.

```docker
ARG TLSFilename # the variable set in the compose file

# Copy private key and cert created with a development root CA
COPY --chmod=600 "tls/${TLSFilename:-localhost}.key" /etc/ssl/private/
COPY "tls/${TLSFilename:-localhost}.pem" /etc/ssl/certs/

# Copy the development root CA and update cert store
COPY tls/rootCA.pem  /usr/local/share/ca-certificates/rootCA.crt
RUN chmod 644 /usr/local/share/ca-certificates/rootCA.crt && update-ca-certificates
```

Continuing with our example, apache requires additional configiration for HTTPS specifically updating default-ssl.conf file to contain a path to the certs.

```docker
ADD 000-default.conf /etc/apache2/sites-available/000-default.conf
ADD default-ssl.conf /etc/apache2/sites-enabled/default-ssl.conf
RUN sed -i "s/localhost.key/${TLSFilename:-localhost}.key/" /etc/apache2/sites-enabled/default-ssl.conf && \
    sed -i "s/localhost.crt/${TLSFilename:-localhost}.pem/" /etc/apache2/sites-enabled/default-ssl.conf
```