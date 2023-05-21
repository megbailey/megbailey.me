import React from 'react';
//import PropTypes from 'prop-types';
import { Layout, Space } from 'antd';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import "../assets/styles/template.css"


const Template = ({ onThemeChange, content }) => { 
    
    return (
      
        <div className={`ant-layout-container`}>
          <Space 
            direction="vertical" 
            style={{ 
              width: '100%' 
            }} 
            size={"small"}
          >
              <Layout>
                <Header onThemeChange={onThemeChange} />
                <Content 
                  className={`ant-layout-content`}
                  style={{ 
                    paddingTop: '1%',
                    paddingLeft: '5%',
                    paddingRight: '5%',
                    paddingBottom: '5%'
                  }} 
                >
                  {content}
                </Content>
                <Footer />
              </Layout>
          </Space>
        </div>
      
    )
}


Template.propTypes = {
  ...Header.propTypes,
  ...Content.propTypes,
  ...Footer.propTypes
};

export default Template;

