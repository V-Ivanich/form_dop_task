import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import * as yup from 'yup'
import TextField from './textField'

const MainForm = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    stayOn: false,
  })
  const [errors, setErrors] = useState({})

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }

  const validateScheme = yup.object().shape({
    password: yup
      .string()
      .required('Пароль обязателен для заполнения')
      .matches(
        /^(?=.*[A-Z])/,
        'Пароль должен содержать хотя бы одну заглавную букву',
      )
      .matches(/(?=.*[0-9])/, 'Пароль должен содержать хотя бы одну цифру')
      .matches(
        /(?=.*[!@#$%^&*])/,
        'Пароль должен содержать один из специальных символов !@#$%^&*',
      )
      .matches(/(?=.{8,})/, 'Пароль должен состоять минимум из 8 символов'),
    email: yup
      .string()
      .required('Электронная почта обязательна для заполнения')
      .email('Email введен некорректно'),
  })

  // const validatorConfig = {
  //   email: {
  //     isRequired: {
  //       message: 'Электронная почта обязательна для заполнения',
  //     },
  //     isEmail: {
  //       message: 'Email введен некорректно',
  //     },
  //   },
  //   password: {
  //     isRequired: {
  //       message: 'Пароль обязателен для заполнения',
  //     },
  //     isCapitalSymbol: {
  //       message: 'Пароль должен содержать хотя бы одну заглавную букву',
  //     },
  //     isContainDigit: {
  //       message: 'Должна быть хотя бы одна цифра',
  //     },
  //     min: {
  //       message: 'Пароль должен состоять минимум из 8 символов',
  //       value: 8,
  //     },
  //   },
  // }

  // useEffect(() => {
  //   validate()
  // }, [data])

  const validate = () => {
    // const errors = validator(data, validatorConfig)
    validateScheme
      .validate(data)
      .then(() => setErrors({}))
      .catch((err) => setErrors({ [err.path]: err.message }))
    setErrors(errors)
    return Object.keys(errors).length === 0
  }
  const isValid = Object.keys(errors).length === 0

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    console.log(data)
  }

  return (
    <div className='container d-flex justify-content-center mt-3'>
      <div className='w-50 shadow p-4'>
        <Form onSubmit={handleSubmit}>
          <div
            style={{
              backgroundColor: 'rgba(170, 245, 251, 0.931)',
              borderRadius: '6px',
            }}>
            <h1 className='p-3'>Создание карточки пользователя</h1>
          </div>

          <TextField
            label='Имя :'
            name='fname'
            value={data.email}
            onChange={handleChange}
            error={errors.email}
          />
          <TextField
            label='Фамилия :'
            name='lname'
            value={data.email}
            onChange={handleChange}
            error={errors.email}
          />
          <TextField
            label='Год рождения :'
            name='yearbirth'
            value={data.email}
            onChange={handleChange}
            error={errors.email}
          />
          <TextField
            label='Портфолио :'
            type='password'
            name='portfolio'
            value={data.password}
            onChange={handleChange}
            error={errors.password}
          />
          <Button
            type='submit'
            disabled={!isValid}
            className='btn btn-primary px-5 mx-auto'>
            Создать
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default MainForm
