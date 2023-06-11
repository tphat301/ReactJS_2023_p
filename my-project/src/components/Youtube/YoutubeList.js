import React from 'react'
import { data } from '../../data'
import YoutubeItem from './YoutubeItem'

const YoutubeList = (props) => {
  const noImg =
    'https://st2.depositphotos.com/2586633/46477/v/600/depositphotos_464771766-stock-illustration-no-photo-or-blank-image.jpg'
  return (
    <div className='wrap-content'>
      <div className='youtube-list'>
        {/* {props.children} */}
        {data.map((item, index) => (
          <YoutubeItem
            key={item.id}
            title={item.title}
            images={item.image ? item.image : noImg}
            alt={item.title}
            className={index === 1 ? 'active' : ''}
          ></YoutubeItem>
        ))}
      </div>
    </div>
  )
}

export default YoutubeList
