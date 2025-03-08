import { useState } from 'react'
import './App.css'
import ExpenceForm from '../component/ExpenceForm'
import ExpenceTable from '../component/ExpenceTable'
import expenceData from '../component/expenceData'

function App() {
  const [expenses, setExpenses] = useState(expenceData)
  // const [total, setTotal] = useState(expenceData)

  return (
    <main>
    <h1>Track Your Expense</h1>
    <div className="expense-tracker">
      <ExpenceForm setExpenses={setExpenses} />
      <ExpenceTable expenses={expenses} /> 
    </div>
  </main>
  )
}

export default App
