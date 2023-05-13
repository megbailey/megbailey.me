import React, { useContext, Children, cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { ThemeContext } from '../context/context';
import "../assets/styles/content.css"

const { Content: LayoutContent } = Layout;

const Content = (props) => {  
     const { style, children } = props
     const theme = useContext(ThemeContext)
     return (
          <LayoutContent className={`ant-layout-content-${theme}`} style={style} >
               { Children.map( children, (child) => {
                    if (!isValidElement(child))
                         return null;
                    // Add theme to children's props
                    return cloneElement( child, {
                         ...child.props,
                         theme: theme
                    })
               })}
          </LayoutContent>
     )
}
   
export default Content;