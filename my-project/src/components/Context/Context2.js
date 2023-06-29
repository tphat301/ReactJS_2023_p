import React, { useContext } from 'react'
import { CountCreateContext } from './Context'

const Context2 = () => {
  // const count = 0
  const [count, setCount] = useContext(CountCreateContext)
  console.log(count)
  return <div className='component2'>Number: {count}</div>
}

export default Context2
