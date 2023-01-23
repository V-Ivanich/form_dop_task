import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import * as yup from 'yup'
import TextField from './textField'
import ModalWindow from './modalWindow'
import { Button } from 'react-bootstrap'

const MainForm = () => {
  let userData = {}
  const [data, setData] = useState({
    fname: '',
    lname: '',
    yearbirth: '',
    email: '',
    url: '',
  })
  const [errors, setErrors] = useState({})

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }
  const validateScheme = yup.object().shape({
    url: yup
      .string()
      .required('Портфолио обязателено для заполнения')
      .matches(
        /[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?/gi,
        'url -введен некорректно',
      ),
    email: yup
      .string()
      .required('Электронная почта обязательна для заполнения')
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
        'Email введен некорректно',
      ),
    yearbirth: yup
      .string()
      .required('Дата рождения обязателена для заполнения(д-м-г)')
      .matches(
        /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
        'Некорректная дата',
      ),

    lname: yup
      .string()
      .required('Фамилия обязательна для заполнения')
      .matches(
        /^[a-zA-Z0-9_-]{2,16}$/,
        'Минимальная длина фамилии 2 символа, а максимум 16',
      ),

    fname: yup
      .string()
      .required('Имя обязателено для заполнения')
      .matches(
        /^[a-zA-Z0-9_-]{2,10}$/,
        'Минимальная длина имени 2 символа, а максимум 10',
      ),
  })

  useEffect(() => {
    validate()
  }, [data])

  const validate = () => {
    validateScheme
      .validate(data)
      .then(() => setErrors({}))
      .catch((err) => setErrors({ [err.path]: err.message }))
    return Object.keys(errors).length === 0
  }
  const isValid = Object.keys(errors).length === 0

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) {
      return console.log(data)
    } else {
      const localData = JSON.stringify(data)
      localStorage.setItem('dataUser', localData)
      handleShow()
    }
  }

  return (
    <>
      <div className='container d-flex justify-content-center mt-3'>
        <div className='w-50 shadow p-4'>
          <Form style={{ fontSize: '1.5rem' }}>
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
              value={data.fname}
              onChange={handleChange}
              error={errors.fname}
            />
            <TextField
              label='Фамилия :'
              name='lname'
              value={data.lname}
              onChange={handleChange}
              error={errors.lname}
            />
            <TextField
              label='Год рождения :'
              name='yearbirth'
              value={data.yearbirth}
              onChange={handleChange}
              error={errors.yearbirth}
            />
            <TextField
              label='Электронная почта'
              name='email'
              value={data.email}
              onChange={handleChange}
              error={errors.email}
            />
            <TextField
              label='Портфолио :'
              name='url'
              value={data.url}
              onChange={handleChange}
              error={errors.url}
            />
            <Button
              type='button'
              disabled={!isValid}
              className='btn btn-outline-danger px-4'
              onClick={handleSubmit}
              style={{ fontSize: '1.5rem' }}>
              Создать
            </Button>
          </Form>
        </div>
      </div>
      <ModalWindow handleClose={handleClose} show={show} />
    </>
  )
}

export default MainForm
