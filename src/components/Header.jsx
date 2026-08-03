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
        className="site-header"
        style={theme.style}
      >
      <Row justify="start" align="middle" className="site-header__row" wrap={false}>
        <Col flex="none" className="site-header__logo">
          <Button 
            type="link"
            shape="circle"
            href={'/'}
            icon={<Avatar size={64} src={LogoWhiteOnBlue} />}
            block
          />
        </Col>
        <Col flex="auto" className="site-header__nav">
          <Menu items={menuItems} />
        </Col>
        <Col flex="none" className="site-header__theme">
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