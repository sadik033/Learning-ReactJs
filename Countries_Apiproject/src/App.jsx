import { useState } from 'react'
import './App.css'
import Header from './component/header'
import { Outlet } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'



const App = () => {
  
  return (
    <ThemeContext.Provider value='abc'>
    <Header/>
    <Outlet/>
    
    </ThemeContext.Provider>
  )
}

export default App
