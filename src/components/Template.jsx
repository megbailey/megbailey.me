import React, { useContext } from 'react';
//import PropTypes from 'prop-types';
import { Layout, Space } from 'antd';

import { ThemeContext } from '../context/context';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import "../assets/styles/template.css"


const Template = ({ onThemeChange, content }) => { 

    const theme = useContext( ThemeContext );
    
    return (
      
        <div className={`ant-layout ${theme}`}>
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

