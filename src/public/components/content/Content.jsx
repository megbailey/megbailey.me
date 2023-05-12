import React, { Children, cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import "./content.css"

const { Content: LayoutContent } = Layout;

const Content = (props) => {  
     const { theme, style, children } = props
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

Content.propTypes = {
     theme: PropTypes.oneOf([ 'dark', 'light' ]),
};
   
export default Content;