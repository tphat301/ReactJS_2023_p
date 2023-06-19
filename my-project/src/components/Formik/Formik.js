import React from 'react'
import { useFormik } from 'formik'

const FormikCom = () => {
  const validate = (values) => {
    const errors = {}
    if (!values.username) {
      errors.username = 'Username Required'
    }

    return errors
  }
  const formik = useFormik({
    initialValues: {
      username: ''
    },
    validate,
    onSubmit: (values) => {
      console.log(values)
    }
  })
  return (
    <form onSubmit={formik.handleSubmit} className='input-gr'>
      <label htmlFor='text'>Text</label>
      <input onChange={formik.handleChange} value={formik.values.username} type='text' name='username' id='text' />
      {formik.errors.username ? <div>{formik.errors.username}</div> : null}
      <button type='submit'>Submit</button>
    </form>
  )
}

export default FormikCom
