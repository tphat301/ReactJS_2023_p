import React from 'react'

import styled from 'styled-components'

const StyledInputRef = styled.input`
  &.active {
    border: 1px solid #f00;
  }
`

const ClockTime = () => {
  const timeCurent = React.useRef(null)

  const inputRef = React.useRef(null)

  const [count, setCount] = React.useState(0)

  const [character, setCharacter] = React.useState('')

  const handleStartTime = () => {
    if (timeCurent.current) return
    timeCurent.current = setCount((count) => count + 1)
  }

  const handleStopTime = () => {
    timeCurent.current = null
  }

  React.useEffect(() => {
    const handleInput = (e) => {
      if (e.currentTarget.value) {
        setCharacter((value) => e.currentTarget.value)
        e.currentTarget.classList.add('active')
      } else {
        setCharacter((value) => '')
        e.currentTarget.classList.remove('active')
      }
    }

    inputRef.current.addEventListener('input', handleInput)

    return () => {
      timeCurent.current = null
    }
  }, [])

  return (
    <div>
      <div className='show-time'>{count || 0}</div>
      <button className='start-count' onClick={handleStartTime} style={{ cursor: 'pointer', userSelect: 'none' }}>
        Start Count
      </button>
      <button className='stop-count' onClick={handleStopTime} style={{ display: 'block' }}>
        Stop Count
      </button>
      <div className='show-character'>{character || ''}</div>
      <StyledInputRef name='input-ref' placeholder='Nhập từ khóa...' ref={inputRef}></StyledInputRef>
    </div>
  )
}

export default ClockTime
