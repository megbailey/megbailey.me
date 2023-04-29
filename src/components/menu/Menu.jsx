import React, { useState } from "react";
import { Menu as AntMenu } from 'antd';

const Menu = (props) => {
  const [currentMenuItem, setCurrentMenuItem] = useState(null);
  //const { items } = props
  const onMenuClick = (e) => {
      console.log(e)
      setCurrentMenuItem(e.key);
  };

  return (
    <AntMenu 
        theme="dark"
        onClick={onMenuClick} 
        selectedKeys={[currentMenuItem]}
        mode="horizontal" 
        items={[
                {
                    label: <a href="/" rel="noopener noreferrer">About Me</a>,
                    key: 'nav-about-me',
                },
                {
                    label: <a href="/projects" rel="noopener noreferrer">Projects</a>,
                    key: 'nav-projects',
                },
                {
                    label: <a href="/knowledge" rel="noopener noreferrer">Blog</a>,
                    key: 'nav-blog',
                },
                {
                    label: <a href="/hello" rel="noopener noreferrer">Hello</a>,
                    key: 'nav-contact',
                }
            ]} 
        />
  );

 /*  Menu.PropTypes = {
      items: PropTypes.shape({
          text: PropTypes.string.isRequired,
          link: PropTypes.string,
          icon: PropTypes.string
        }),
  } */
}

export default Menu;