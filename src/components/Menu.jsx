import React, { useState, useContext } from "react";
import { PropTypes } from "prop-types";
import { Menu as AntMenu } from 'antd';

import { ThemeContext } from "../context/context";
import { themeStyle } from "../utils/style.js";


const Menu = (props) => {
  const [currentMenuItem, setCurrentMenuItem] = useState(null);
  const { items } = props

  const theme = useContext(ThemeContext);
  
  const onMenuClick = (e) => {
      setCurrentMenuItem(e.key);
  };

  
  return (
    <AntMenu 
        className={`ant-menu`}
        onClick={onMenuClick} 
        selectedKeys={[currentMenuItem]}
        mode="horizontal" 
        style={ themeStyle(theme) }
        theme={theme}
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

Menu.propTypes = {
    theme: PropTypes.oneOf(['dark', 'light']),
   /*  items: PropTypes.shape({
        text: PropTypes.string.isRequired,
        link: PropTypes.string,
        //icon: PropTypes.string
      }), */
}

export default Menu;