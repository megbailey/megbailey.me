import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { Menu as AntMenu } from 'antd';

import { themeStyle } from "../../../assets/styles/global.css";


const Menu = (props) => {
  const [currentMenuItem, setCurrentMenuItem] = useState(null);
  const { items, theme } = props
  
  const onMenuClick = (e) => {
      setCurrentMenuItem(e.key);
  };

  console.log(theme)
  return (
    <AntMenu 
        className={`ant-menu`}
        onClick={onMenuClick} 
        selectedKeys={[currentMenuItem]}
        mode="horizontal" 
        style={ themeStyle(theme) }
        items={ items.map( item => {
            const { text, link, icon } = item
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