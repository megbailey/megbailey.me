import React from 'react';
import { Layout, Space } from 'antd';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const Template = ({ content }) => { 
    
    return (
      <div className={`template`}>
          <Space 
            direction="vertical" 
            size={"small"}
            style={{ 
              width: '100%' 
            }} 
          >
            <Layout>
              <Header />
              <Content >
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

