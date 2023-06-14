import Card from './components/Card/Card'
import { GlobalStyles } from './GlobalStyles'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    green: 'green'
  }
}

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles></GlobalStyles>
        <Card></Card>
      </ThemeProvider>
    </div>
  )
}

export default App
