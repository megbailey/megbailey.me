import React from 'react';
import PropTypes from 'prop-types';
import { 
     Layout, Col, Row, Button, Avatar, Affix, Typography
} from 'antd';

import "./footer.css"

import OctocatIcon from '../../assets/img/octocat.png'
import LinkedInIcon from '../../assets/img/linkedin-icon.png'

const { Footer } = Layout;
const { Text } = Typography;


const TemplateFooter = ({ theme }) => {  
     return (
          <Footer className={`ant-layout-footer-${theme}`}>
          <Affix offsetBottom={0}>
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
          </Affix>
          </Footer>
     )
}

TemplateFooter.propTypes = {
};
   
export default TemplateFooter;