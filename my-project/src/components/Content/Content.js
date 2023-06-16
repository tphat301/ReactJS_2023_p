import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'

const Content = () => {
  const [data, setData] = useState([])
  const tabs = ['posts', 'albums', 'photos']
  const [param, setParam] = useState('posts')
  useEffect(() => {
    const response = axios.get(`https://jsonplaceholder.typicode.com/${param}`)
    response
      .then((res) => {
        return res.data
      })
      .then((res) => {
        setData(res)
      })
      .catch((error) => console.log(error))
  }, [param])

  const handleClickTab = (e) => {
    const tabs = e.target.dataset.tab
    setParam(tabs)
  }

  // Styled
  const StyledTabList = styled.div`
    display: flex;
    max-width: 500px;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    margin-top: 40px;
    .tab.active {
      color: #fff;
      background-color: blue;
    }
    .tab-posts,
    .tab-albums,
    .tab-photos {
      padding: 8px 12px;
      background-color: #fff;
      border-radius: 25px;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
      font-size: 24px;
      text-transform: capitalize;
      cursor: pointer;
      user-select: none;
      transition: all 0.4s linear;
      &:hover {
        color: #fff;
        background-color: blue;
      }
    }
  `

  const StyledTabContent = styled.div`
    max-width: 1200px;
    width: calc(100% - 20px);
    margin: auto;
    margin-top: 40px;
    .tab-content-main {
      padding: 8px 0;
      span {
        font-weight: bold;
        margin-right: 12px;
      }
    }
  `

  return (
    <div>
      <StyledTabList>
        {tabs.length > 0 &&
          tabs.map((item) => {
            return (
              <div
                onClick={handleClickTab}
                data-tab={item}
                className={`tab-${item} tab ${param === item ? 'active' : ''}`}
                key={item}
              >
                {item}
              </div>
            )
          })}
      </StyledTabList>
      <StyledTabContent>
        {data.length > 0 &&
          data.map((item) => {
            return (
              <div className='tab-content-main' key={item.id}>
                <span>{item.id}</span> {item.title}
              </div>
            )
          })}
      </StyledTabContent>
    </div>
  )
}

export default Content
