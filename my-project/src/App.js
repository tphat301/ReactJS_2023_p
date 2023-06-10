import './App.css'
import { data } from './data.js'

function Feature() {
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

function YoutubeItem(props) {
  return (
    <div className='youtube-item'>
      <h3 className='youtube-title'>{props.title ? props.title : 'Tiêu đề của ảnh'}</h3>
      <div className='youtube-image'>
        <img src={props.images} alt={props.alt} />
      </div>
    </div>
  )
}

function App() {
  return (
    <div className='wrap-content'>
      <div className='youtube-list'>
        {data.map((item) => (
          <YoutubeItem key={item.id} title={item.title} images={item.image} alt={item.title}></YoutubeItem>
        ))}
      </div>
    </div>
  )
}

export default App
