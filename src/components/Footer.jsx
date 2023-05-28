import React, { useContext } from 'react';
//import PropTypes from 'prop-types';
import { 
     Layout, Button, Avatar, Space, Divider
} from 'antd';

import { Text } from './Text';

import { ThemeContext } from '../context/context';

import OctocatLight from '../assets/img/github-48-light.png'
import OctocatDark from '../assets/img/github-48-dark.png'
import LinkedInLight from '../assets/img/linkedin-50-light.png'
import LinkedInDark from '../assets/img/linkedin-50-dark.png'
import { themeStyle } from '../utils/style';

const { Footer: LayoutFooter } = Layout;


const Footer = () => {  
     const theme = useContext(ThemeContext);
     return (
          <LayoutFooter style={ themeStyle(theme) }>
                <Space 
                    style={{ display: 'flex' , justifyContent: 'center' }}
                    split={<Divider type="vertical" />}
               >
                    <Button 
                         size={'small'}
                         type="link"
                         shape="circle"
                         href={'/'}
                         icon={<Avatar size={24} src={theme === "light" ? OctocatLight: OctocatDark} />}
                         block
                    />
                    <Button 
                         size={'small'}
                         type="link"
                         shape="circle"
                         href={'/'}
                         icon={<Avatar size={24} src={theme === "light" ? LinkedInLight: LinkedInDark} />}
                         block
                    />
                    <Text>© Megan Bailey</Text>
                </Space>
          </LayoutFooter>
     )
}

Footer.propTypes = {
};
   
export default Footer;