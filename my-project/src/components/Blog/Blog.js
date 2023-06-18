import React from 'react'
import useElementLink from '../../Hook/useLElementLink'

const Blog = () => {
  const {divRef} = useElementLink()

  return (
    <div className='div-ref' ref={divRef}>
      <a href='https://google.com' className='link' style={{ display: 'block' }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, error!
      </a>
      <a href='https://google.com' className='link' style={{ display: 'block' }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, error!
      </a>
      <a href='https://google.com' className='link' style={{ display: 'block' }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, error!
      </a>
    </div>
  )
}

export default Blog
