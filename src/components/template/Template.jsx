import React, { useState } from 'react';
import { 
  Layout, Space, Typography, Col, Row,
  Button, Avatar, Image, Affix 
} from 'antd';
import PropTypes from 'prop-types';
import Menu from '../menu/Menu';

import MasterBall from '../../assets/img/master-ball.png'
import CascadeBadge from '../../assets/img/cascade-badge.png'
import ThunderBadge from '../../assets/img/thunder-badge.png'
import EarthBadge from '../../assets/img/earth-badge.png'

import OctocatIcon from '../../assets/img/octocat.png'
import LinkedInIcon from '../../assets/img/linkedin-icon.png'

const { Header, Footer, Content } = Layout;

const { Text, Link } = Typography;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

const Template = (props) => { 

    const { menuItems } = props    

    return (
        <Space direction="vertical" style={{ width: '100%' }} size={"small"}>
            <Layout>
            <Header style={headerStyle}>
              <Row justify="start">
                <Col span={1}>
                  <Space align="center">
                    <Button 
                      type="link"
                      shape="circle"
                      hrerf={'/'}
                      icon={<Avatar size={40} src={MasterBall} />}
                      block
                    />
                  </Space>
                </Col>
                <Col flex="auto">
                  <Menu items={menuItems} />
                </Col>
              </Row>
              
            </Header>


            <Content style={contentStyle}>
              <Image
                preview={false}
                src="http://placehold.it/3000x1000"
                width={'100%'}
              />
              <Row justify={"center"}>
                <Col xs={{ span: 6 }}>
                  <Button 
                      size={'large'}
                      type="link"
                      shape="circle"
                      href={'/about-me'}
                      icon={<Avatar size={64} src={CascadeBadge} />}
                      block
                  >About Me</Button>
                </Col>
                <Col xs={{ span: 6 }} >
                  <Button 
                    size={'large'}
                    type="link"
                    shape="circle"
                    href={'/projects'}
                    icon={<Avatar size={64} src={ThunderBadge} />}
                    block
                  >Projects</Button>
                </Col>
                <Col xs={{ span: 6 }}>
                  <Button 
                    size={'large'}
                    type="link"
                    shape="circle"
                    href={'/knowledge'}
                    icon={<Avatar size={64} src={EarthBadge} />}
                    block
                  >Blog</Button>
                </Col>
              </Row>
            </Content>

            <Affix offsetBottom={0}>
              <Footer style={footerStyle}>
                <Row justify={"center"}>
                <Col xs={{ span: 1 }}>
                    <Button 
                        size={'small'}
                        type="link"
                        shape="circle"
                        href={'/'}
                        icon={<Avatar size={24} src={OctocatIcon} />}
                        block
                    />
                  </Col>
                  <Col xs={{ span: 1 }} >
                    <Button 
                      size={'small'}
                      type="link"
                      shape="circle"
                      href={'/'}
                      icon={<Avatar size={24} src={LinkedInIcon} />}
                      block
                    />
                  </Col>
                  <Col xs={{ span: 2 }}>
                    <Text>© Megan Bailey</Text>
                  </Col>
                  </Row>
              </Footer>
            </Affix>
            </Layout>
        </Space>
    )
}



export default Template;

