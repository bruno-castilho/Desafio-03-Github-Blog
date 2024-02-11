import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './global.ts'
import { defaultTheme } from './styles/themes/default.ts'
import { Router } from './Router.tsx'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}
