import React from 'react'
import app from './app.module.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yub from 'yup'

const validationSchema = Yub.object({
  fullname: Yub.string()
    .required('Họ và tên không được bỏ trống')
    .max(15, 'Họ và tên chỉ được phép nhập tối đa 15 ký tự')
})
const ReactHookFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isDirty, isSubmitted },
    reset
  } = useForm({ resolver: yupResolver(validationSchema), mode: 'onChange' })
  const onSubmit = async (values) => {
    if (isValid) {
      alert(`Data is send to backend`)
      reset({
        fullname: '',
        address: ''
      })
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
        <div className={app.marginBottomCustom}>
          <input
            type='text'
            name='fullname'
            className={app.inputCustom}
            placeholder='Họ tên:'
            {...register('fullname', {
              required: true,
              maxLength: 15
            })}
          />
        </div>
        {/* {errors.fullname && errors.fullname.type === 'required' && (
          <div className={app.textDanger}>Họ và tên không được bỏ trống</div>
        )}
        {errors.fullname && errors.fullname.type === 'maxLength' && (
          <div className={app.textDanger}>Họ và tên chỉ được phép nhập tối đa 15 ký tự</div>
        )} */}
        <div className={app.textDanger}>{errors.fullname?.message}</div>
        <div className='group-input'>
          <input
            type='text'
            name='address'
            className={app.inputCustom}
            placeholder='Địa chỉ:'
            {...register('address', {
              required: true
            })}
          />
        </div>
        {errors.address && errors.address.type === 'required' && (
          <div className={app.textDanger}>Email không được bỏ trống</div>
        )}
        <div>
          <input type='submit' className={app.inputBtn} name='btn-submit' value='Đăng ký' />
        </div>
      </form>
    </div>
  )
}

export default ReactHookFrom
