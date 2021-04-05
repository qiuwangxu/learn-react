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
interface AppContextInterface {
  theme: any;
  toggleTheme: ()=> void
}
export const ThemContext = React.createContext<AppContextInterface|null>({
  theme: theme.dark,
  toggleTheme: () => {
    console.log(22222)
  }
})