import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './global.ts'
import { defaultTheme } from './styles/themes/default.ts'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>Hello World</h1>
    </ThemeProvider>
  )
}
