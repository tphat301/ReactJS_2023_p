import React from 'react'
import styled from 'styled-components'
import SekeletonAbout from './SekeletonAbout'

const StyledSekeleton = styled.div`
  position: fixed !important;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10000000;
  background-color: #fff;
  .sekeleton-about {
    margin-top: 12px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
    .sekeleton-about-right,
    .sekeleton-about-left {
      padding: 10px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }

    .sekeleton-about-left {
      width: 40%;
      height: 300px;
      .sekeleton-about-title {
        height: 40px;
        width: 100%;
        margin-bottom: 40px;
      }
      .sekeleton-about-desc {
        margin-top: 12px;
        .sekeleton-about-desc1,
        .sekeleton-about-desc2,
        .sekeleton-about-desc3,
        .sekeleton-about-desc4 {
          width: 100%;
          height: 12px;
          margin-bottom: 10px;
        }
      }
      .sekeleton-about-btn {
        width: 30%;
        height: 45px;
        outline: none;
        border: none;
        margin-top: 12px;
      }
    }
    .sekeleton-about-right {
      width: 58%;
      height: 300px;
    }
  }
`

const Sekeleton = () => {
  return (
    <StyledSekeleton>
      <SekeletonAbout></SekeletonAbout>
    </StyledSekeleton>
  )
}

export default Sekeleton
