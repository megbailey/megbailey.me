import React, { useRef } from 'react';
import { Layout, Col, Row, Button, Avatar, Switch } from 'antd';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux'

import Menu from './Menu';

import LogoWhiteOnBlue from '../../assets/img/MeganLogo-38.png'

import { updateTheme } from '../utils/reducers';
import store from '../utils/store';

import '../../assets/styles/header.css'

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
const isDark = theme.mode === 'dark'

  return (
      <LayoutHeader 
        ref={ref}
        style={theme.style}
      >
      <Row justify="start" align="middle">
        <Col xs={3} sm={2} md={2} lg={1} xl={1} xxl={1}>
          <Button 
            type="link"
            shape="circle"
            href={'/'}
            icon={<Avatar size={64} src={LogoWhiteOnBlue} />}
            block
          />
        </Col>
        <Col xs={16} sm={16} md={20} lg={21} xl={21} xxl={21}>
          <Menu items={menuItems} />
        </Col>
        <Col xs={2} sm={2} md={1} lg={1} xl={1} xxl={1}>
          <Switch
            className={`theme-switch theme-switch--${theme.mode}`}
            checked={isDark}
            checkedChildren={<MoonOutlined />}
            unCheckedChildren={<SunOutlined />}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            onChange={(checked) => store.dispatch(updateTheme(checked ? 'dark' : 'light'))}
          />
        </Col>
      </Row>
    </LayoutHeader>
  )
}
   
export default Header;