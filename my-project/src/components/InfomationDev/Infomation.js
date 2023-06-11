import React from 'react'

const infomation = () => {
  const infomation = {
    fullname: 'Đỗ Lâm Thành Phát',
    age: 24,
    email: 'dolamthanhphat@gmail.com'
  }
  return (
    <div className='App'>
      <h3 className='fullname'>Họ và tên: {infomation['fullname']}</h3>
      <div className='age'>
        <strong>Tuổi: </strong>
        {infomation.age}
      </div>
      <span className='email'>
        <strong>Email: </strong>
        {infomation.email}
      </span>
    </div>
  )
}
