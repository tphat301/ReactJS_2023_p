import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StyledList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: calc(100% + 12px);
  margin: 0 -6px;
`

const StyledItem = styled.div`
  width: calc(100% / 3 - 12px);
  margin: 0 6px 60px 6px;
  overflow: hidden;
`

const StyledImg = styled.img`
  height: 100%;
`

const StyledAuthor = styled.h2`
  font-size: 30px;
  text-align: center;
  text-transform: capitalize;
`

const getPhoto = async (page) => {
  try {
    const res = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=6`)
    return res.data
  } catch (error) {
    console.error(error)
  }
}
const Photo = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    // handleClickLoadData()
    handleClickNextLoadData()
    handleClickPrevLoadData()
  }, [])

  const [pageNumber, setPageNumber] = useState(1)
  // const [state, dispath] = useReducer(reduce, initialState)

  const nextAction = 'next'
  const previousAction = 'previous'
  const reduce = (numberPage, action) => {
    switch (action) {
      case nextAction:
        return numberPage + 1
      case previousAction:
        return numberPage - 1

      default:
        throw new Error('Error!!!')
    }
  }

  const [numberPage, dispath] = useReducer(reduce, 1)

  const handleClickNextLoadData = () => {
    getPhoto(numberPage)
      .then((res) => {
        setData(res)
        // setPageNumber(pageNumber + 1)
        dispath('next')
      })
      .catch((error) => console.log(error))
  }

  const handleClickPrevLoadData = () => {
    getPhoto(numberPage)
      .then((res) => {
        setData(res)
        // setPageNumber(pageNumber + 1)
        dispath('previous')
      })
      .catch((error) => console.log(error))
  }

  return (
    <StyledList>
      {data.length > 0 &&
        data.map((item) => {
          return (
            <StyledItem key={item.id}>
              <StyledAuthor>{item.author}</StyledAuthor>
              <StyledImg src={item.download_url} alt='' />
            </StyledItem>
          )
        })}
      <span onClick={handleClickPrevLoadData}>Prev</span>
      <span onClick={handleClickNextLoadData}>Next</span>
    </StyledList>
  )
}

export default Photo
