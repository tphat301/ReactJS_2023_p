import React from 'react'
import styles from './button.module.css'

const Button = (props) => {
  return (
    <div className={props.btn ? styles.btn : ''}>
      <button className={props.primary ? styles.btnPrimary : styles.btnSecondary}>Primary</button>
      <button className={props.primary ? styles.btnPrimary : styles.btnSecondary}>Secondary</button>
    </div>
  )
}

export default Button
