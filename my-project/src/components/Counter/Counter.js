import React, { useReducer, useState } from 'react'
import './Counter.css'

const Counter = (props) => {
  // 1. Trước tiên mình sẽ dùng useSate()
  // const [number, setNumber] = useState(0)
  // const handleClickPrev = () => {
  //   setNumber((number) => number - 1)
  // }

  // const handleClickNext = () => {
  //   setNumber((number) => number + 1)
  // }

  // 2. Sử dụng useReducer()
  const action1 = 'Prev'
  const action2 = 'Next'
  const reducer = (number, action) => {
    switch (action) {
      case action1:
        return number - 1

      case action2:
        return number + 1

      default:
        throw new Error('Invalid action')
    }
  }

  // useState:
  // const [state, setState] = useState(initialState);

  // useReducer:
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [number, dispatch] = useReducer(reducer, 0)

  const handlePrev = () => dispatch(action1)
  const handleNext = () => dispatch(action2)
  return (
    <div className='counter'>
      <div className='counter-number'>{number ? number : 0}</div>
      <div className='counter-control'>
        <span className='counter-prev' onClick={handlePrev}>
          Prev
        </span>
        <span className='counter-next' onClick={handleNext}>
          Next
        </span>
      </div>
    </div>
  )
}

export default Counter
