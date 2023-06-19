import React from 'react'
import styled from 'styled-components'

const StyledSekeletonLoading = styled.div`
  position: relative;
  background-color: #b8b8b8 !important;
  overflow: hidden;
  border-radius: 10px;
  height: 100%;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.5), transparent);
    animation: loading 1s infinite;
    @keyframes loading {
      100% {
        transform: translateX(100%);
      }
    }
  }
`

const SekeletonLoading = () => {
  return <StyledSekeletonLoading></StyledSekeletonLoading>
}

export default SekeletonLoading
