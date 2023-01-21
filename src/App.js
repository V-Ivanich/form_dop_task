import React from 'react'
import MainForm from './components/mainForm'
import { Route, Routes } from 'react-router-dom'
import AddUser from './components/addUser'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainForm />} />
        <Route path='/register' element={<AddUser />} />
      </Routes>
    </>
  )
}

export default App
