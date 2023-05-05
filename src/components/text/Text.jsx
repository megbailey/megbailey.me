import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';

import "./text.css"

const { 
     Text: TypographyText,
     Title: TypographyTitle,
     Paragraph: TypographyParagraph,
} = Typography;




const Title = ( { theme, text } ) => {  
 
     return (
          <TypographyTitle className={`ant-typography-title-${theme}`}>
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
     text: PropTypes.element,
     theme: PropTypes.oneOf([ 'dark', 'light' ])
};
Text.propTypes = {
     text: PropTypes.element,
     theme: PropTypes.oneOf([ 'dark', 'light' ])
};
Paragraph.propTypes = {
     text: PropTypes.element,
     theme: PropTypes.oneOf([ 'dark', 'light' ])
};

   
export { Title, Paragraph, Text };