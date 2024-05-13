import { createSlice } from "@reduxjs/toolkit";


const lightStyle = {
    color: '#001529',
    backgroundColor: '#fff'
}

const darkStyle = {
    color: '#fff',
    backgroundColor: '#001529'
}


export const themeSlice = createSlice({
    name: "theme",
    initialState: { 
        value: { 
            mode: 'dark',
            style: darkStyle
        }
    },
    reducers: {
        updateTheme: (state, action) => {
            let theme, respectiveStyle;
            switch( action.payload ) {
                case 'light':
                    theme = action.payload
                    respectiveStyle = lightStyle
                    break;
                case 'dark': 
                    theme = action.payload
                    respectiveStyle = darkStyle
                    break;
                                    
            }

            state.value = {
                ...state.value,
                mode: theme,
                style: respectiveStyle
            }
        },
    }
})

export const { updateTheme } = themeSlice.actions;