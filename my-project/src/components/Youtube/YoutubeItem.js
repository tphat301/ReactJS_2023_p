import React from 'react'

const YoutubeItem = (props) => {
  return (
    <div className={`youtube-item ${props.className}`}>
      <h3 className='youtube-title'>{props.title ? props.title : 'Chưa có tiêu đề ảnh'}</h3>
      <div className='youtube-image'>
        <img src={props.images} alt={props.alt} />
      </div>
    </div>
  )
}

export default YoutubeItem
