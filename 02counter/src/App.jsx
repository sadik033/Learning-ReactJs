import { useState } from 'react'
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
    <h1>Counter App in React</h1>
    <h2>Counter value: {counter}</h2>
   <div className="btn">
   <button onClick={addValue} >Add Value </button>
    
    <button onClick={decValue} >Decease Value </button>
   </div>
    </>
  )
}

export default App
