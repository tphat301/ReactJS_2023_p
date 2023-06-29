// import Card from './components/Card/Card'
// import { GlobalStyles } from './GlobalStyles'
// import Photo from './components/Photo/Photo'
// import Content from './components/Content/Content'
// import { styled } from 'styled-components'
import React, { createContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
// import Input from './components/Input/Input'
// import ClockTime from './components/ClockTime/ClockTime'
// import Blog from './components/Blog/Blog'
// import Login from './components/Login/Login'
// import Movies from './components/Movies/Movies'
// import Sekeleton from './components/Sekeleton/Sekeleton'
// import From from './components/Form/From'
// import Signup from './components/ExeSignup/Signup'
// import ReactHookFrom from './components/ReactHookForm/ReactHookFrom'
// import Props from './components/Props/Props'
import './App.css'
import CountProviderContext from './components/Context/Context'
import Context1 from './components/Context/Context1'
import Context2 from './components/Context/Context2'
import Nav from './components/Nav'

import Modal from './components/Portal/Modal'
import Routers from './router/Routers'

// const StyledBackTop = styled.div`
//   position: fixed;
//   right: 15px;
//   bottom: 15px;
//   border-radius: 100%;
//   width: 50px;
//   height: 50px;
//   color: #fff;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
//   background-color: #f00;
// `

// const theme = {
//   colors: {
//     green: 'green'
//   }
// }

function App() {
  const [show, setShow] = React.useState(false)
  const handleModal = (e) => {
    e.stopPropagation()
    setShow(true)
  }
  return (
    // <div>
    //   <ThemeProvider theme={theme}>
    //     <GlobalStyles></GlobalStyles>
    //     <Card></Card>
    //   </ThemeProvider>
    // </div>
    // <Photo></Photo>
    // <div>
    //   <StyledBackTop>Back</StyledBackTop>
    //   <Content></Content>
    // </div>
    // <Input></Input>
    // <Blog></Blog>
    // <Login></Login>
    // <Movies></Movies>
    // <Sekeleton></Sekeleton>
    // <From></From>
    // <Props></Props>

    // <Signup></Signup>

    // <>
    //   <Modal show={show} handleShowModal={() => setShow(false)}></Modal>
    //   <button className='btn-modal' onClick={handleModal}>
    //     Modal
    //   </button>
    // </>
    // <CountProviderContext>
    //   <Context1></Context1>
    //   <Context2></Context2>
    // </CountProviderContext>
    <div>
      {/* <Nav></Nav> */}
      <Routers></Routers>
    </div>
  )
}

export default App
