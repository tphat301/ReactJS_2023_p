import React from 'react'

const InputCustom = ({ label, ...props }) => {
  console.log(props)
  return (
    <div>
      <form>
        <div>
          <div>{props.title}</div>
          <label htmlFor={props.id || props.name}>{label}</label>
          <input type='text' {...props} />
        </div>
      </form>
    </div>
  )
}

const Props = () => {
  return (
    <div>
      <InputCustom title='phat' label='Username' id='username' name='username' className='123' placeholder='xxx'></InputCustom>
    </div>
  )
}

export default Props
