import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import { validator } from '../../utils/validator'
import TextField from '../common/form/textField'

const AddUser = () => {
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

  const validatorConfig = {
    email: {
      isRequired: {
        message: 'Электронная почта обязательна для заполнения',
      },
      isEmail: {
        message: 'Email введен некорректно',
      },
    },
    password: {
      isRequired: {
        message: 'Пароль обязателен для заполнения',
      },
      isCapitalSymbol: {
        message: 'Пароль должен содержать хотя бы одну заглавную букву',
      },
      isContainDigit: {
        message: 'Должна быть хотя бы одна цифра',
      },
      min: {
        message: 'Пароль должен состоять минимум из 8 символов',
        value: 8,
      },
    },
  }

  useEffect(() => {
    validate()
  }, [data])

  const validate = () => {
    const errors = validator(data, validatorConfig)
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
    <Form onSubmit={handleSubmit}>
      <TextField
        label='Электронная почта'
        name='email'
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextField
        label='Пароль'
        type='password'
        name='password'
        value={data.password}
        onChange={handleChange}
        error={errors.password}
      />
      <Button
        type='submit'
        disabled={!isValid}
        className='btn btn-primary w-100 mx-auto'>
        Submit
      </Button>
    </Form>
  )
}

export default AddUser