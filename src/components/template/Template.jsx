import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Layout, Space } from 'antd';

import Header from '../header/Header';
import Content from '../content/Content';
import Footer from '../footer/Footer';

import "./template.css"

const ThemeContext = React.createContext(null);

const Template = ({ content }) => { 
    const [theme, setTheme] = useState('dark');


    return (
      
        <div className={`ant-layout ${theme}`}>
          <Space direction="vertical" style={{ width: '100%' }} size={"small"}>
              <Layout>
                <Header
                  theme={theme} 
                  onThemeChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                />
                <Content theme={theme}>
                  {content}
                </Content>
                <Footer theme={theme} />
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

