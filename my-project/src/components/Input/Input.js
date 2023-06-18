import React, { useEffect, useState } from 'react'

const Input = () => {
  const [color, setColor] = useState('')
  useEffect(() => {
    const handleClick = (e) => {
      const colors = ['#f00', 'blue', 'violet', 'pink', '#2919f9']
      const indexCurrentColor = Math.ceil(Math.random() * 5)
      e.stopPropagation()
      if (indexCurrentColor) {
        setColor(colors[indexCurrentColor])
        e.currentTarget.style.background = color
      }
    }
    document.querySelector('.click').addEventListener('click', handleClick)
  }, [color])
  return (
    <div className='box'>
      <div className='click'>Click</div>
    </div>
  )
}

export default Input
