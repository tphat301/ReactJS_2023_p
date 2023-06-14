import React from 'react'
import styled, { css } from 'styled-components'

const CardList = styled.div`
  display: flex;
  max-width: 1200px;
  margin: auto;
  margin-top: 30px;
  width: calc(100% - 20px);
`

const StyledCardItem = styled.div`
  position: relative;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 20%;
  margin-right: 10px;
  ${(props) =>
    props.active &&
    css`
      background: linear-gradient(to right, #29f9c9, transparent);
    `}
`

const StyledCardPicture = styled.picture`
  display: block;
  width: 100%;
  overflow: hidden;
`

const StyledCardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s linear;
  ${StyledCardPicture}:hover & {
    cursor: pointer;
    transform: scale(1.1);
  }
`
const StyledCardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledPriceOld = styled.del`
  font-size: 14px;
  color: #8b8b8b;
`

const StyledPriceNew = styled.p`
  color: #f00;
  /* color: ${(props) => props.theme.colors.green}; */
  font-size: ${(props) => props.fontSize || '18px'};
  font-weight: bold;
`

const StyledBtnControl = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  width: calc(100% - 24px);
`
const StyledBtnCardAdd = styled.a`
  padding: 6px 4px;
  color: #fff;
  border-radius: 4px;
  text-decoration: none !important;
  background-color: green;
  cursor: pointer;
  width: calc(50% + 8px);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 4px;
  transition: all 0.4s ease-in-out;
  &:hover {
    opacity: 0.9;
  }
`

const StyledBtnBuyNow = styled.a`
  padding: 4px;
  color: #fff;
  border-radius: 4px;
  text-decoration: none !important;
  background-color: #f00;
  cursor: pointer;
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease-in-out;
  &:hover {
    opacity: 0.9;
  }
`

const Card = () => {
  return (
    <CardList>
      {Array(3)
        .fill(0)
        .map((item, index) => {
          return (
            <StyledCardItem active={index === 0} key={index}>
              <StyledCardPicture>
                <StyledCardImg
                  src='https://images.unsplash.com/flagged/photo-1585052201332-b8c0ce30972f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHJlc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
                  alt='Hình ảnh 1'
                />
              </StyledCardPicture>
              <StyledCardInfo>
                <StyledPriceNew>100.000VND</StyledPriceNew>
                <div className='text-bluec'>ABC</div>
                <StyledPriceOld>300.000VND</StyledPriceOld>
              </StyledCardInfo>
              <StyledBtnControl>
                <StyledBtnCardAdd>Thêm vào giỏ</StyledBtnCardAdd>
                <StyledBtnBuyNow>Mua ngay</StyledBtnBuyNow>
              </StyledBtnControl>
            </StyledCardItem>
          )
        })}
      {/* <StyledCards>ReactJs</StyledCards>
      <StyledCards>ReactJs</StyledCards>
      <StyledCards>ReactJs</StyledCards> */}
    </CardList>
  )
}

export default Card
