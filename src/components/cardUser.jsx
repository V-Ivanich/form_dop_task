import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const CardUser = ({ props }) => {
  const todaysDate = new Date().getFullYear()
  const difference = todaysDate - Number(props.yearbirth)

  const renderPhrase = (number) => {
    const pattern = /^[2-4]{1}$|^.{0,}[2-4][2-4]$/
    if (pattern.test(number)) {
      return `${number} года`
    } else {
      const pattern_2 = /^[1]{1}$|^.{0,}[0][1]$|^.{0,}[2-9][1]$/
      if (pattern_2.test(number)) {
        return `${number} год`
      } else return `${number} лет`
    }
  }

  const fullAge = renderPhrase(difference)

  return (
    <Card border='success' className='w-50 shadow p-2'>
      <Card.Header style={{ backgroundColor: 'rgba(170, 245, 251, 0.931)' }}>
        <h1>Карточка студента</h1>
      </Card.Header>
      <Card.Body style={{ fontSize: '1.5rem' }}>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>Имя : &nbsp;{props.fname}</li>
          <li className='list-group-item'>Фамилия : &nbsp;{props.lname}</li>
          <li className='list-group-item'>
            Год рождения : &nbsp;{props.yearbirth} &nbsp;({fullAge})
          </li>
          <li className='list-group-item'>Email : &nbsp;{props.email}</li>
          <li className='list-group-item'>Портфолио : &nbsp;{props.url}</li>
        </ul>
        <hr />
        <Link
          to='/register'
          className='btn btn-outline-success px-4'
          style={{ fontSize: '1.5rem' }}>
          Редактировать
        </Link>
      </Card.Body>
    </Card>
  )
}

export default CardUser
