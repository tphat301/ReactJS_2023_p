import Card from './components/Card/Card'
import { GlobalStyles } from './GlobalStyles'
import { ThemeProvider } from 'styled-components'
import Photo from './components/Photo/Photo'
import Content from './components/Content/Content'
import { styled } from 'styled-components'

const StyledBackTop = styled.div`
  position: fixed;
  right: 15px;
  bottom: 15px;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #f00;
`

const theme = {
  colors: {
    green: 'green'
  }
}

function App() {
  return (
    // <div>
    //   <ThemeProvider theme={theme}>
    //     <GlobalStyles></GlobalStyles>
    //     <Card></Card>
    //   </ThemeProvider>
    // </div>
    // <Photo></Photo>
    <div>
      <StyledBackTop>Back</StyledBackTop>
      <Content></Content>
    </div>
  )
}

export default App
