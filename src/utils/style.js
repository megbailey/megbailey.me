const darkTheme = {
    color: '#fff',
    backgroundColor: '#001529'
}

const lightTheme = {
    color: '#001529',
    backgroundColor: '#fff'
}

export const themeStyle = ( theme ) => {
    return theme === 'light' ? lightTheme : darkTheme
} 