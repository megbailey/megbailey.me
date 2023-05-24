import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { 
     Layout, Space, Col, Row, Button, Avatar, Switch
} from 'antd';

import Menu from './Menu';

import { ThemeContext } from '../context/context';
import "../assets/styles/header.css"

import MasterBall from '../assets/img/master-ball.png';
import Sun from '../assets/img/sun-transparent-pixel.png';
import Moon from  '../assets/img/moon-transparent-pixel.png';


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
       link: '/hello'
     }
];

const Header = ({ onThemeChange }) => {  
const theme = useContext(ThemeContext);

  return (
      <LayoutHeader className={`ant-layout-header-${theme}`}>
      <Row justify="start">
        <Col span={1}>
          <Space align="center">
            <Button 
              type="link"
              shape="circle"
              href={'/'}
              icon={<Avatar size={40} src={MasterBall} />}
              block
            />
          </Space>
        </Col>
        <Col flex="auto">
          <Menu items={menuItems} />
        </Col>
        <Col>
        <Switch
          checkedChildren={<Avatar size={20} src={Moon} />}
          unCheckedChildren={<Avatar size={20} src={Sun} />}
          defaultChecked={ theme === 'dark' ? true : false }
          onChange={onThemeChange}
        />
        </Col>
      </Row>
      
    </LayoutHeader>
  )
}

Header.propTypes = {
     onThemeChange: PropTypes.func
};
   
export default Header;