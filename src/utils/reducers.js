import { createSlice } from "@reduxjs/toolkit";


const lightStyle = {
    color: '#001529',
    backgroundColor: '#fff'
}

const darkStyle = {
    color: '#fff',
    backgroundColor: '#001529'
}

const resolveTheme = (mode) => {
    if (mode === 'light') {
        return {
            mode: 'light',
            style: lightStyle
        }
    }

    return {
        mode: 'dark',
        style: darkStyle
    }
}

const storedTheme = typeof localStorage !== 'undefined'
    ? localStorage.getItem('theme')
    : null

export const themeSlice = createSlice({
    name: "theme",
    initialState: { 
        value: resolveTheme(storedTheme)
    },
    reducers: {
        updateTheme: (state, action) => {
            state.value = resolveTheme(action.payload)
        },
    }
})

export const { updateTheme } = themeSlice.actions;
