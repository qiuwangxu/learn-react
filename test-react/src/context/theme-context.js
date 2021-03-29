import React from 'react'

export const theme = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
}

export const ThemContext = React.createContext({
  theme: theme.dark,
  toggleTheme: () => {
    console.log(22222)
  }
})