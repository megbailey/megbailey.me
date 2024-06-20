import React, { useRef } from 'react';
import { Layout, Col, Row, Button, Avatar, Switch } from 'antd';
import { useSelector } from 'react-redux'

import Menu from './Menu';

import MasterBall from '../../assets/img/master-ball.png';
import Sun from '../../assets/img/sun-transparent-pixel.png';
import Moon from  '../../assets/img/moon-transparent-pixel.png';

import { updateTheme } from '../utils/reducers';
import store from '../utils/store';


const { Header: LayoutHeader } = Layout;

const menuItems = [
     {
         text: 'About Me',
         link: '/about'
     },
     {
       text: 'Projects',
       link: '/projects'
     },
     {
       text: 'Blog',
       link: '/knowledge'
     },
     {
       text: 'Hello',
       link: 'mailto:meganbailey@sandiego.edu'
     }
];

const Header = () => { 
const theme =  useSelector(state => state.theme.value)
const ref = useRef(null);

  return (
      <LayoutHeader 
        ref={ref}
        style={theme.style}
      >
      <Row justify="start">
        <Col xs={3} sm={2} md={2} lg={1} xl={1} xxl={1}>
          <Button 
            type="link"
            shape="circle"
            href={'/'}
            icon={<Avatar size={40} src={MasterBall} />}
            block
          />
        </Col>
        <Col xs={16} sm={16} md={20} lg={21} xl={21} xxl={21}>
          <Menu items={menuItems} />
        </Col>
        <Col xs={2} sm={2} md={1} lg={1} xl={1} xxl={1}>
        <Switch
          checkedChildren={<Avatar size={20} src={Moon} />}
          unCheckedChildren={<Avatar size={20} src={Sun} />}
          defaultChecked={ theme.mode === 'dark' ? true : false }
          onChange={ () => store.dispatch( updateTheme( theme.mode === 'light' ? `dark` : `light`) ) }
        />
        </Col>
      </Row>
    </LayoutHeader>
  )
}
   
export default Header;