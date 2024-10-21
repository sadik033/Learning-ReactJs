import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter]= useState(10)

  const addValue =()=>{
   if(counter < 20){
    setCounter(counter + 1)
   }
  }
  const decValue=() =>{
    if (counter > 0){
      setCounter(counter - 1)
    } 
    
  }

  return (
    <>
    <h1>First REACT Project</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue} >Add Value {counter}</button>
    
    <button onClick={decValue} >Decease Value {counter}</button>
    </>
  )
}

export default App
