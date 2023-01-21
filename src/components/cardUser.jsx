import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const CardUser = () => {
  return (
    <Card border='success' className='w-50 shadow p-2'>
      <Card.Header style={{ backgroundColor: 'rgba(170, 245, 251, 0.931)' }}>
        <h1>Карточка студента</h1>
      </Card.Header>
      <Card.Body style={{ fontSize: '1.5rem' }}>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>Имя :</li>
          <li className='list-group-item'>Фамилия :</li>
          <li className='list-group-item'>Год рождения :</li>
          <li className='list-group-item'>Портфолио :</li>
        </ul>
        <hr />
        <Button variant='outline-success px-4' style={{ fontSize: '1.5rem' }}>
          Редактировать
        </Button>
      </Card.Body>
    </Card>
  )
}

export default CardUser
