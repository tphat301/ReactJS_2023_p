import React from 'react'
import styled from 'styled-components'
// import { useFormik } from 'formik'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yub from 'yup'

const StyledFrom = styled.form`
  max-width: fit-content;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;

  .username {
    width: 520px;
    outline: none;
    border: none;
    padding: 10px 14px;
    border: 1px solid #ccc;
    border-radius: 10px;
    &:focus {
      border: 1px solid blue;
    }
  }
`

const StyledUsernameTitle = styled.label`
  display: block;
  font-weight: 700;
  margin-bottom: 8px;
`

const StyledBtnSubmit = styled.button`
  outline: none;
  border: none;
  width: 100px;
  height: 40px;
  color: #fff;
  margin-top: 8px;
  border-radius: 10px;
  background-color: blueviolet;
`

// const validate = (values) => {
//   const errors = {}
//   if (!values.username) {
//     errors.username = 'Username không được bỏ trống!'
//   } else if (values.username.length >= 20) {
//     errors.username = 'Username nhập vào không được vượt quá 20 ký tự!'
//   } else if (/[^a-z0-9_\.]+$/.test(values.username)) {
//     errors.username = 'Username không hợp lệ'
//   }
//   return errors
// }

const From = () => {
  // const formik = useFormik({
  //   initialValues: {
  //     username: ''
  //   },
  //   // validate,
  // validationSchema: yub.object({
  //   username: yub
  //     .string()
  //     .max(20, 'Username nhập vào không được vượt quá 20 ký tự!')
  //     .required('Username không được bỏ trống!')
  // }),
  //   onSubmit: (values) => {
  //     console.log(values)
  //   }
  // })

  // console.log(formik)
  return (
    // <StyledFrom onSubmit={formik.handleSubmit} autoComplete='off'>
    //   <div className='form-gr'>
    //     <StyledUsernameTitle htmlFor='username'>Username: </StyledUsernameTitle>
    //     <input
    //       className='username'
    //       name='username'
    //       value={formik.values.username}
    //       onChange={formik.handleChange}
    //       onBlur={formik.handleBlur}
    //       placeholder='Enter your username...'
    //     />
    //     {formik.touched.username && formik.errors.username ? (
    //       <div className='error' style={{ color: '#f00' }}>
    //         {formik.errors.username}
    //       </div>
    //     ) : null}
    //   </div>
    //   <StyledBtnSubmit type='submit' name='btn-submit'>
    //     Submit
    //   </StyledBtnSubmit>
    // </StyledFrom>
    // Có thể dùng {...formik.getFieldProp} trong input username để gộp onChage onBlur và onSubmit đồng thời lấy luôn fiel vào formik để handler

    <Formik
      initialValues={{
        username: ''
      }}
      validationSchema={yub.object({
        username: yub
          .string()
          .max(20, 'Username nhập vào không được vượt quá 20 ký tự!')
          .required('Username không được bỏ trống!')
      })}
      onSubmit={(values) => {
        return values
      }}
    >
      <Form>
        <div className='form-gr'>
          <StyledUsernameTitle htmlFor='username'>Username: </StyledUsernameTitle>
          <Field type='text' name='username' placeholder='Enter your username...' />
          <div className='error' style={{ color: '#f00' }}>
            <ErrorMessage name='username'></ErrorMessage>
          </div>
        </div>
        <StyledBtnSubmit type='submit' name='btn-submit'>
          Submit
        </StyledBtnSubmit>
      </Form>
    </Formik>
  )
}

export default From
