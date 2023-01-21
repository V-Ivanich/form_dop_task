import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import CardUser from './cardUser'

const MainForm = () => {
  const keysUsers = localStorage.getItem('userData')
  console.log(keysUsers)
  // const [data, setData] = useState()
  // setData(keysUsers ? keysUsers : '')
  return (
    <>
      <div className='container d-flex justify-content-center mt-3'>
        {!keysUsers ? (
          <Card border='success' className='w-50 shadow p-2'>
            <Card.Header
              style={{ backgroundColor: 'rgba(170, 245, 251, 0.931)' }}>
              <h1>Карточка студента</h1>
            </Card.Header>
            <Card.Body>
              <Card.Title>Нет данных</Card.Title>
              <hr />
              <Link
                to='/register'
                variant='outline-info px-4'
                style={{ fontSize: '1.5rem' }}>
                Добавить
              </Link>
            </Card.Body>
          </Card>
        ) : (
          <CardUser />
        )}
      </div>
    </>
  )
}

export default MainForm
