import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import "./content.css"

const { Content: LayoutContent } = Layout;

const Content = ({theme, children}) => {  
 
     return (
          <LayoutContent 
               className={`ant-layout-content-${theme}`}
          >
             {/*  <ThemeContext.Provider theme={theme}> */}
                    {children}
               {/* </ThemeContext.Provider>; */}
          </LayoutContent>
     )
}

Content.propTypes = {
     theme: PropTypes.oneOf([ 'dark', 'light' ]),
};
   
export default Content;