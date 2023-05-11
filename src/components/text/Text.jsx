import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';

import "./text.css"

const { 
     Text: TypographyText,
     Title: TypographyTitle,
     Paragraph: TypographyParagraph,
} = Typography;


const propValues = {
     theme: [ 'dark', 'light' ]
}


const Title = ( { theme, size, text } ) => {  
 
     return (
          <TypographyTitle 
               level={size}
               className={`ant-typography-title-${theme}`}
          >
               { text }
          </TypographyTitle>
     )
}


const Paragraph = ( { theme, text } ) => {  
 
     return (
          <TypographyParagraph className={`ant-typography-paragraph-${theme}`}>
               { text }
          </TypographyParagraph>
     )
}

const Text = ( { theme, text } ) => {  
 
     return (
          <TypographyText className={`ant-typography-text-${theme}`}>
               { text }
          </TypographyText>
     )
}

Title.propTypes = {
     //text: PropTypes.element,
     size: PropTypes.oneOf([1, 2, 3, 4, 5]),
     theme: PropTypes.oneOf(propValues.theme)
};
Text.propTypes = {
     //text: PropTypes.element,
     theme: PropTypes.oneOf(propValues.theme)
};
Paragraph.propTypes = {
     //text: PropTypes.element,
     theme: PropTypes.oneOf(propValues.theme)
};

   
export { Title, Paragraph, Text };