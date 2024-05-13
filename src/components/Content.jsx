import React, { Children, cloneElement, isValidElement, useRef } from 'react';
import { Layout } from 'antd';
import { useSelector, shallowEqual } from 'react-redux';

import "../assets/styles/content.css"

const { Content: LayoutContent } = Layout;

const Content = (props) => {  
     const { children } = props

     const theme = useSelector(state => state.theme.value)
     const ref = useRef(null)
     return (
          <LayoutContent 
               ref={ref}
               className='ant-layout-content'
               style={theme.style}
          >
               { Children.map( children, (child) => {
                    if (!isValidElement(child))
                         return null;
                    // Add theme to children's props
                    return cloneElement( child, {
                         ...child.props,
                         parentRef: ref,
                    })
               })}
          </LayoutContent>
     )
}
   
export default Content;