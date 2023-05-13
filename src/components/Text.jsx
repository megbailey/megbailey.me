import React, { useContext} from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';

import "../assets/styles/text.css"
import { ThemeContext } from '../context/context';

const { 
     Text: TypographyText,
     Title: TypographyTitle,
     Paragraph: TypographyParagraph,
} = Typography;



const Title = ( { size, children } ) => {  
     const theme = useContext(ThemeContext);
     
     return (
          <TypographyTitle 
               className={`ant-typography-title-${theme}`}
               level={size}
          >
               { children }
          </TypographyTitle>
     )
}


const Paragraph = ( { children } ) => {  
     const theme = useContext(ThemeContext);
     return (
          <TypographyParagraph className={`ant-typography-paragraph-${theme}`} style={{ margin: '5%' }} >
               { children }
          </TypographyParagraph>
     )
}

const Text = ( { children } ) => {  
     const theme = useContext(ThemeContext);
     return (
          <TypographyText className={`ant-typography-text-${theme}`}>
               { children }
          </TypographyText>
     )
}

Title.propTypes = {
     size: PropTypes.oneOf([1, 2, 3, 4, 5]),
};
Text.propTypes = {
};
Paragraph.propTypes = {

};

   
export { Title, Paragraph, Text };