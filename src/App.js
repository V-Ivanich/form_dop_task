import React from 'react'
import MainCard from './components/mainCard'
import { Route, Routes } from 'react-router-dom'
import MainForm from './components/mainForm'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainCard />} />
        <Route path='/register' element={<MainForm />} />
      </Routes>
    </>
  )
}

export default App
