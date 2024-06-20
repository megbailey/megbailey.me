import React from 'react';
import { Layout, Button, Avatar, Space, Divider } from 'antd';
import { useSelector } from 'react-redux';

import { Text } from './Text';

import OctocatLight from '../../assets/img/github-48-light.png'
import OctocatDark from '../../assets/img/github-48-dark.png'
import LinkedInLight from '../../assets/img/linkedin-50-light.png'
import LinkedInDark from '../../assets/img/linkedin-50-dark.png'

const { Footer: LayoutFooter } = Layout;


const Footer = () => {  
     const theme = useSelector(state => state.theme.value)

     return (
          <LayoutFooter style={theme.style}>
               <Space 
                    style={{ display: 'flex' , justifyContent: 'center' }}
                    split={<Divider type="vertical" />}
               >
                    <Button 
                         size={'small'}
                         type="link"
                         shape="circle"
                         href={'https://github.com/megbailey'}
                         icon={<Avatar size={24} src={theme.mode === "light" ? OctocatLight: OctocatDark} />}
                         block
                    />
                    <Button 
                         size={'small'}
                         type="link"
                         shape="circle"
                         href={'/'}
                         icon={<Avatar size={24} src={theme.mode === "light" ? LinkedInLight: LinkedInDark} />}
                         block
                    />
                    <Text>© Megan Bailey</Text>
               </Space>
          </LayoutFooter>
     )
}
   
export default Footer;