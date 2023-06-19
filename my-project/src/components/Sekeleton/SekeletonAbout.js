import React from 'react'
import SekeletonLoading from './SekeletonLoading'
import styled from 'styled-components'
const StyledWrapContent = styled.div`
  max-width: 1200px;
  width: calc(100% - 20px);
  margin-left: auto;
  margin-right: auto;
`
const SekeletonAbout = () => {
  return (
    <StyledWrapContent>
      <div className='sekeleton-about'>
        <div className='sekeleton-about-left'>
          <h2 className='sekeleton-about-title'>
            <SekeletonLoading></SekeletonLoading>
          </h2>
          <div className='sekeleton-about-desc'>
            <p className='sekeleton-about-desc1'>
              <SekeletonLoading></SekeletonLoading>
            </p>
            <p className='sekeleton-about-desc2'>
              <SekeletonLoading></SekeletonLoading>
            </p>
            <p className='sekeleton-about-desc3'>
              <SekeletonLoading></SekeletonLoading>
            </p>
            <p className='sekeleton-about-desc3'>
              <SekeletonLoading></SekeletonLoading>
            </p>
          </div>
          <button className='sekeleton-about-btn'>
            <SekeletonLoading></SekeletonLoading>
          </button>
        </div>
        <div className='sekeleton-about-right'>
          <SekeletonLoading></SekeletonLoading>
        </div>
      </div>
    </StyledWrapContent>
  )
}

export default SekeletonAbout
