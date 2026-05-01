# Local Development Environment with Containers

Posted: June 20, 2024

Local development environments have a funny way of becoming tribal knowledge. One person knows which repositories need to sit next to each other. Another person remembers which SQL files need to run first. Someone else has the magic command in their shell history, and a new developer is left trying to reconstruct the whole thing from hints.

The project is an attempt to make the development setup of a microservice archtecture easier. Collections of custom Docker images and segmented Docker Compose files can re-create any server environment locally. Instead of every project to maintain individual docker-compose files or deployment details, there is a way to structure the like-envionrments to re-use shared building blocks that can be combined for the project you are actually working on.

## The core idea

The repository is built around a base Compose file, and project-specific Compose files are merged together. The base file defines the common local environment: the shared network, ports, containers, and minimal configuration that most projects need.

Project-specific Compose files then layer on top of it with the details that vary from project to project, usually bind mounts and dependency-specific volumes. That gives each project a smaller, clearer setup file. Developers can commit a Compose file for their project without duplicating the entire environment definition every time. Furthermore, changes to the base compose or images will eventually propogate to other developers without the use of an image registry.

### Working Example

Below is a sample base Compose file which defines 3 services: a webserver, an api server, and a database server. Each are attached to the same network, have custom hostnames, and bind to different ports.

The database service is the only service with volumes configured in the base file. These volumes mount `../database/data` to persist data between database teardowns and `../database/initdb/` to boostrap the databse with valid sql script on first intializing ( or when `../database/data` is empty and container is restarted).

```text
# docker-compose.yml

services:
  webapi:
    build:
      context: $PWD/development-images/webapi
    hostname: localhost-webapi.megbailey.me
    ports:
      - "8888:80"
      - "8444:443"
    networks:
      - developmentNetwork
  webserver:
    build:
      context: $PWD/development-images/webserver
    hostname: localhost.megbailey.me
    ports:
      - "8080:80"
      - "8443:443"
    networks:
      - developmentNetwork
  database:
    image: mysql
    hostname: localhost-database.megbailey.me
    ports:
      - "3306:3306"
    volumes:  
      - ../database/data:/var/lib/mysql
      - ../database/initdb/:/docker-entrypoint-initdb.d
    restart: always
    networks:
      - developmentNetwork
    environment:
      MARIADB_ROOT_PASSWORD: root
networks:
  developmentNetwork:
    ipam:
      driver: default
```

### Why segmented Compose files help

The main benefit is continuity. A developer should be able to clone a project, clone the repository beside it, and find a project Compose file that explains how to run that project locally.

This approach helps with:

- reducing duplicated Docker configuration across projects
- making local setup more consistent between developers
- isolatating project-specific volumes to the project that needs them
- making local testing possible without memorizing every environment detail

For smaller projects, one Compose file is usually enough. For projects with several dependencies, multiple Compose files can be merged at runtime.

## Repository requirements

To use the project, you need:

- Docker Desktop installed locally
- TLS artifacts generated for the containers
- local `/etc/hosts` entries for container hostnames
- all dependent repositories are in the same parent directory / are sibling directories

That sibling-directory convention matters because it is easiest if Compose files commonly bind mount code from neighboring repositories.

A typical local workspace might look like this:

```text
git/
  development-images/
  some-cool-project/
  oauth/
  some-api-project/
```

## Structuring segmented Compose files

Docker Compose can merge multiple Compose files from left to right. The base environment comes first, followed by dependency Compose files, followed by the project-specific Compose file.

The command looks like this:

```bash
docker compose \
  -f development-images/docker-compose.yml \
  -f docker-compose-api-oauth.yml \
  -f docker-compose-project.yml \
  up -d
```

- `development-images/docker-compose.yml` defines the shared base
- `docker-compose-api-oauth.yml` is some important shared library
- `docker-compose-project.yml` is project-specific files

Usually complex projects are needed to deploy multiple places. Front-end React code and API database-interaction code at least. The `docker-compose-project.yml` can either reference each service or be split up individually one per file.

```yml
# docker-compose-project.yml

services:
  webserver:
    volumes:
      - $PWD/../example-project/integration/:/var/www/www.megbailey.me/html/example-project/
  webapi:
    volumes:
      # API endpoints
      - $PWD/../example-project/html/app-api:/var/www/localhost-webapi.megbailey.me/htm/example-project-api/endpoints
      # API logic
      - $PWD/../example-project/includes/example-project-api:/var/www/includes/example-project-api
  database:
    volumes:
      # Optionally, overloading where data is loaded and stored so that its local to the repo
      - $PWD/../example-project/containers/data:/var/lib/mysql
      - $PWD/../example-project/containers/initdb:/docker-entrypoint-initdb.d
```

### Database behavior

The database container uses two important volumes:

```text
./database/data:/var/lib/mysql
./database/initdb:/docker-entrypoint-initdb.d
```

The `data` volume persists database state between container restarts. The `initdb` volume contains SQL files that run when the database initializes.

That persistence is helpful, but it also means changing SQL files in `database/initdb` will not automatically re-run them against an existing database. To reinitialize the database, stop the container and delete the stored database state:

```bash
rm -rf ./database/data
```

Then rebuild or restart the database container.

## Local TLS and hostnames

You can further level up your envionment by installing and creating locally trusted certificates. These certificates are trusted ONLY by the the developer's machine and not by outside systems. This keeps local HTTPS behavior closer to production without pretending the containers are public services.

A dependency is that local hostnames need to resolve through `/etc/hosts`, so that the browser will not return a warning that certificate hostname does not match the server hostname.

### Generating local TLS certificates

For macOS, `mkcert` is the friendliest way to create locally trusted development certificates:

```bash
brew install mkcert
mkcert -install
mkcert -CAROOT
```

`mkcert -install` creates a local development Certificate Authority on your machine. Certificates created with that CA are trusted only by your local machine, which is exactly what we want for development.

After locating the root CA with `mkcert -CAROOT`, copy `rootCA.pem` into each image's `tls` directory:

```bash
cp ~/Library/Application\ Support/mkcert/rootCA.pem ~/git/devcontainer/development-images/webserver/tls/rootCA.pem
cp ~/Library/Application\ Support/mkcert/rootCA.pem ~/git/devcontainer/development-images/webapi/tls/rootCA.pem
```

I like creating a temporary working directory for the certificate artifacts:

```bash
cd ~/Desktop
mkdir tls
cd tls
```

For each container that needs a locally-trusted certificate, generate a private key, create a certificate signing request, and sign it with the local Certifcate Authority:

```bash
openssl genrsa -out ./containerCanonicalHostname.key 2048
```

```bash
openssl req \
  -new \
  -key ./containerCanonicalHostname.key \
  -subj "/C=US/ST=California/L=San Diego/O=megbailey.me/OU=megbailey.me Development/CN=containerCanonicalHostname" \
  -out ./containerCanonicalHostname.csr
```

```bash
mkcert -csr ./containerCanonicalHostname.csr
```

Replace `containerCanonicalHostname` with the actual hostname for the container. If you are using separate `webapi`, `webserver` containers, repeat this process for each unique hostname.

Then, move the generated files into the matching image directory to live alongside the Dockerfile.

```bash
mv containerCanonicalHostname.key ~/git/development-images/[imageName]/tls/
mv containerCanonicalHostname.csr ~/git/development-images/[imageName]/tls/
mv containerCanonicalHostname.pem ~/git/development-images/[imageName]/tls/
```

In this setup, `imageName` is the image folder for the container, such as `webserver`, `webapi`.

These TLS artifacts should stay local to each developer. The repository's `.gitignore` should exclude them so private keys and generated certificates are not committed.

Once the files are in place, rebuild the images and start the containers:

```bash
docker compose up --build
```

If Docker already has images with the same names, remove the old images first so the new TLS files are included in the rebuild. When the containers are running, open the container hostname in the browser. If the hostname, certificate, and `/etc/hosts` entry all line up, the page should load without certificate warnings.
