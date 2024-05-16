import React, { useState } from "react";
import { Menu as AntMenu } from 'antd';
import { useSelector } from 'react-redux';
import '../assets/styles/menu.css'


const Menu = (props) => {
  const [currentMenuItem, setCurrentMenuItem] = useState(null);
  const { items } = props

  const theme = useSelector(state => state.theme.value)
  
  const onMenuClick = (e) => {
      setCurrentMenuItem(e.key);
  };

  
  return (
    <AntMenu 
        className={`ant-menu`}
        onClick={onMenuClick} 
        selectedKeys={[currentMenuItem]}
        mode="horizontal" 
        style={theme.style}
        theme={theme.mode}
        items={ items.map( item => {
            const { text, link } = item
            return {
                label: <a href={`${link}`} rel="noopener noreferrer">{text}</a>,
                key: `nav-${text}`
            }
        })} 
    />
  );

}

export default Menu;