import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Layout, Space } from 'antd';

import TemplateHeader from '../header/Header';
import TemplateContent from '../content/Content';
import TemplateFooter from '../footer/Footer';

import "./template.css"



const Template = ({ content }) => { 
    const [theme, setTheme] = useState('dark');


    return (
      <div className={`ant-layout ${theme}`}>
        <Space direction="vertical" style={{ width: '100%' }} size={"small"}>
            <Layout>
              <TemplateHeader
                theme={theme} 
                onThemeChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              />
              <TemplateContent 
                content={content}
                theme={theme}
              />
              <TemplateFooter
                theme={theme} 
              />
            </Layout>
        </Space>
      </div>
    )
}


Template.propTypes = {
  ...TemplateHeader.propTypes,
  ...TemplateContent.propTypes,
  ...TemplateFooter.propTypes
};

export default Template;

