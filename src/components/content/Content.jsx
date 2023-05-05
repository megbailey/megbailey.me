import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

const { Content } = Layout;

const TemplateContent = ({content}) => {  
 
     return (
          <Content>
               {content}
          </Content>
     )
}

TemplateContent.propTypes = {
     content: PropTypes.element
};
   
export default TemplateContent;