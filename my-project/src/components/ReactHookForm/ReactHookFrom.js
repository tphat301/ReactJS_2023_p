import React from 'react'
import app from './app.module.css'
import { useForm } from 'react-hook-form'

const ReactHookFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  // console.log(errors)

  const onSubmit = (values) => console.log(values)
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
        {errors.fullname && errors.fullname.type === 'required' && (
          <div className={app.textDanger}>Họ và tên không được bỏ trống</div>
        )}
        {errors.fullname && errors.fullname.type === 'maxLength' && (
          <div className={app.textDanger}>Họ và tên chỉ được phép nhập tối đa 15 ký tự</div>
        )}
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
