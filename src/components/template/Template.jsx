import React, { useState } from 'react';
import { Layout, Space, Avatar, Col, Row, Button  } from 'antd';
import Icon from '@ant-design/icons';
import PropTypes from 'prop-types';
import Menu from '../menu/Menu';
import MasterBall from '../../assets/img/master-ball.png'

const { Header, Footer, Content } = Layout;


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

const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
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
              <Col span={2}>
                <Space align="center">
                  <Button 
                    type="link"
                    shape="circle"
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
            <Content style={contentStyle}>Content</Content>
            <Footer style={footerStyle}>Footer</Footer>
            </Layout>
        </Space>
    )
}



export default Template;

