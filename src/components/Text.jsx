import React from 'react';
import { Typography } from 'antd';
import { useSelector } from 'react-redux';

const { 
     Text: TypographyText,
     Title: TypographyTitle,
     Paragraph: TypographyParagraph,
} = Typography;



const Title = ( { size, style, children } ) => {  
     const theme = useSelector(state => state.theme.value)
     return (
          <TypographyTitle 
               style={{
                    ...theme.style,
                    ...style
               }}
               level={size}
          >
               { children }
          </TypographyTitle>
     )
}


const Paragraph = ( { style, children } ) => {  
     const theme = useSelector(state => state.theme.value)
     return (
          <TypographyParagraph 
               style={{ 
                    ...theme.style,
                    ...style,
                    wordBreak: 'normal'
               }} >
               { children }
          </TypographyParagraph>
     )
}

const Text = ( { style, children } ) => {  
     const theme = useSelector(state => state.theme.value)
     return (
          <TypographyText style={{ 
               ...style,
               ...theme.style,
               wordBreak: 'normal'
          }} >
               { children }
          </TypographyText>
     )
}
   
export { Title, Paragraph, Text };