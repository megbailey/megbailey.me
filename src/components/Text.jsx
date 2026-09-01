import React from 'react';
import { Typography } from 'antd';
import { useSelector } from 'react-redux';

const { 
     Text: TypographyText,
     Title: TypographyTitle,
     Paragraph: TypographyParagraph,
} = Typography;

const textStyle = {
     color: 'var(--site-text-color)',
     backgroundColor: 'transparent',
}



const Title = ( { size, style, className, children } ) => {  
     const theme = useSelector(state => state.theme.value)
     return (
          <TypographyTitle 
               className={className}
               style={{
                    ...textStyle,
                    color: theme.style.color,
                    ...style
               }}
               level={size}
          >
               { children }
          </TypographyTitle>
     )
}


const Paragraph = ( { style, className, children } ) => {  
     return (
          <TypographyParagraph 
               className={className}
               style={{ 
                    ...textStyle,
                    ...style,
                    wordBreak: 'normal'
               }} >
               { children }
          </TypographyParagraph>
     )
}

const Text = ( { style, className, children } ) => {  
     return (
          <TypographyText
               className={className}
               style={{ 
                    ...textStyle,
                    ...style,
                    wordBreak: 'normal'
               }}
          >
               { children }
          </TypographyText>
     )
}
   
export { Title, Paragraph, Text };
