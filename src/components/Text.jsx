import React, { useContext} from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';

import { ThemeContext } from '../utils/context';
import { themeStyle } from '../utils/style';

const { 
     Text: TypographyText,
     Title: TypographyTitle,
     Paragraph: TypographyParagraph,
} = Typography;



const Title = ( { size, children } ) => {  
     const theme = useContext(ThemeContext);
     
     return (
          <TypographyTitle 
               style={ themeStyle(theme) }
               level={size}
          >
               { children }
          </TypographyTitle>
     )
}


const Paragraph = ( { children } ) => {  
     const theme = useContext(ThemeContext);
     return (
          <TypographyParagraph 
               style={{ 
                    ...themeStyle(theme),
                    wordBreak: 'normal'
               }} >
               { children }
          </TypographyParagraph>
     )
}

const Text = ( { children } ) => {  
     const theme = useContext(ThemeContext);
     return (
          <TypographyText style={{ 
               ...themeStyle(theme),
               wordBreak: 'normal'
          }} >
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