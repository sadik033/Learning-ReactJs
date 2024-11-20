import { useState } from 'react'
import './App.css'
import Header from './component/header'
import { Outlet } from 'react-router-dom'



const App = () => {
  
  return (
    <>
    <Header/>
    <Outlet/>
    
    </>
  )
}

export default App
