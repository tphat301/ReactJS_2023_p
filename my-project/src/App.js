import logo from './logo.svg'
import './App.css'

function App() {
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
    </div>
  )
}

export default App
