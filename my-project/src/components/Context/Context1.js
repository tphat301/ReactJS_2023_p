import React, { useContext } from 'react'
import { CountCreateContext } from './Context'

const Context1 = () => {
  const [count, setCount] = useContext(CountCreateContext)
  // const setCount = () => {}
  const handleClick = () => {
    return setCount((count) => count + 1)
  }
  return (
    <div className='component1' onClick={handleClick}>
      Click me
    </div>
  )
}

export default Context1
