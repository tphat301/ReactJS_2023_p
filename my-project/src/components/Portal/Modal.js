import React, { Fragment, useReducer } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'

/* Styled */
const StyledModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  inset: 0;
  background-color: #ccc;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  &.is-show {
    opacity: 1;
    visibility: visible;
  }
  .modal-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
    background: #fff;
    max-width: 500px;
    max-height: 300px;
    border-radius: 20px;
    text-align: justify;
    z-index: 1000;
  }
  .modal-action {
    position: absolute;
    width: 30px;
    height: 30px;
    right: -10px;
    top: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50rem;
    color: #000;
    background: #fff;
    transition: all 0.4s linear;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    cursor: pointer;
  }
  .modal-action:hover {
    background-color: #f00;
    color: #fff;
  }
  .modal-content {
    position: relative;
    padding: 0 20px;
    line-height: 1.6;
    font-size: 18px;
    z-index: 1000;
  }
`

/* Portal sẽ render ra node được chứa từ content body và cùng cấp với root */

const Modal = ({ show = false, handleShowModal = () => {} }) => {
  if (typeof document === 'undefined') return <div className='modal'></div>
  return ReactDOM.createPortal(
    <StyledModal className={`${show === false ? '' : 'is-show'}`} onClick={handleShowModal}>
      <div className='overplay'></div>
      <div className='modal-container' onClick={(e) => e.stopPropagation()}>
        <div className='modal-action' onClick={handleShowModal}>
          X
        </div>
        <div className='modal-content'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita accusamus, id asperiores alias vitae quis
          sapiente ratione quo? Qui, cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          accusamus, id asperiores alias vitae quis sapiente ratione quo? Qui, cupiditate.
        </div>
      </div>
    </StyledModal>,
    document.querySelector('body')
  )
}

Modal.prototype = {
  open:PropTypes.bool
}

export default Modal
