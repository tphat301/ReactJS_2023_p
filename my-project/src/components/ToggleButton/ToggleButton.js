import React, { useState } from 'react'
import './ToggleButton.css'

const ToggleButton = () => {
  const [on, setOn] = useState(false)
  const handleToggle = (e) => {
    if (!on) {
      // document.body.classList.add('active')
      e.currentTarget.parentNode.parentNode.parentNode.classList.add('active')
    } else {
      // document.body.classList.remove('active')
      e.currentTarget.parentNode.parentNode.parentNode.classList.remove('active')
    }
    setOn((on) => !on)
  }
  return (
    <div>
      <div className={`toggle ${on ? 'active' : ''}`} onClick={handleToggle}>
        <div className='spinner'></div>
      </div>
    </div>
  )
}

export default ToggleButton
