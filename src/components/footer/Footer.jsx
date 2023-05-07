import React from 'react';
import PropTypes from 'prop-types';
import { 
     Layout, Col, Row, Button, Avatar, Affix, Typography
} from 'antd';
import { Text } from '../text/Text';

import "./footer.css"

import OctocatLight from '../../assets/img/github-48-light.png'
import OctocatDark from '../../assets/img/github-48-dark.png'
import LinkedInLight from '../../assets/img/linkedin-50-light.png'
import LinkedInDark from '../../assets/img/linkedin-50-dark.png'

const { Footer: LayoutFooter } = Layout;


const Footer = ({ theme }) => {  
     return (
          <LayoutFooter className={`ant-layout-footer-${theme}`}>
          <Affix offsetBottom={0}>
               <Row justify={"center"}>
               <Col xs={{ span: 1 }}>
               <Button 
                    size={'small'}
                    type="link"
                    shape="circle"
                    href={'/'}
                    icon={<Avatar size={24} src={theme === "light" ? OctocatLight: OctocatDark} />}
                    block
               />
               </Col>
               <Col xs={{ span: 1 }} >
               <Button 
                    size={'small'}
                    type="link"
                    shape="circle"
                    href={'/'}
                    icon={<Avatar size={24} src={theme === "light" ? LinkedInLight: LinkedInDark} />}
                    block
               />
               </Col>
               <Col xs={{ span: 2 }}>
               <Text
                    theme={theme}
                    text={'© Megan Bailey'}
               />
               </Col>
               </Row>
          </Affix>
          </LayoutFooter>
     )
}

Footer.propTypes = {
};
   
export default Footer;