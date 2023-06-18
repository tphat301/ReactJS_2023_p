import React from 'react'
import styled from 'styled-components'

const StyledLogin = styled.div`
  display: block;
  max-width: fit-content;
  margin: auto;

  h3 {
    text-align: center;
    text-transform: uppercase;
    margin-top: 12px;
    margin-bottom: 12px;
  }

  .username {
    margin-bottom: 12px;
  }
  .username,
  .password {
    display: block;
    padding: 12px;
    text-indent: 8px;
    border-radius: 12px;
    border: 1px solid #ccc;
    outline: none;
  }
  .remember {
    margin-right: 8px;
  }
`

const Login = () => {
  const [fields, setFields] = React.useState({
    username: '',
    password: '',
    remember: false
  })
  const handleChangeForm = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    })
  }
  return (
    <StyledLogin>
      <h3>Login</h3>
      <input
        type='text'
        name='username'
        className='username'
        onChange={handleChangeForm}
        placeholder='Enter your username'
      ></input>
      <input
        type='password'
        name='password'
        className='password'
        onChange={handleChangeForm}
        placeholder='Enter your password'
      />
      <input type='checkbox' name='remember' className='remember' onChange={handleChangeForm} />
      <label htmlFor='remember'>Ghi nhớ</label>
    </StyledLogin>
  )
}

export default Login
