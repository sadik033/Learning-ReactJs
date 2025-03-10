import React, { useState } from 'react'
import Input from './input'
import Select from './Select'

export default function ExpenseForm({ setExpenses }) {
  const [expense, setExpense] = useState({
    title: '',
    category: '',
    amount: '',
  })
  const [errors, setErrors]= useState({})

  const validationConfig = {
    title:[{ required:true, message: 'Please Enter Title'},
       {minLenght:5, message:'Title should be atleast 5 characters long'}],
    category:[{ required:true, message: 'Please Select Category'}],
    amount:[{ required:true, message: 'Please Enter amount'}],
  }

  const validate= (formData) =>{
    const errorsData = {}

Object.entries(formData).forEach(([key, value]) =>{
validationConfig[key].some((rule) => {
  
  if(rule.required && !value){
    errorsData[key] = rule.message
    return true
  }
  if(rule.minLenght && value.length < 5){
    errorsData[key] = rule.message
    return true
  }
})
})

   
    setErrors(errorsData)
    return errorsData
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    const validateResult= validate(expense)
    if(Object.keys(validateResult).length) return
    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ])
    setExpense({
      title: '',
      category: '',
      amount: '',
    })
  }
  
  const handleChange = (e) =>{
    const {name, value} = e.target
    setExpense((prevState) => ({
      ...prevState,
      [name]:value,
    }))
    setErrors({})
  }
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
  
      < Input 
      label= 'Title'
       id= 'title'
        name='title'
         value={expense.title}
          error={errors.title}
           onChange={handleChange}/>
      
      < Select
      label= 'Category'
      id= 'category'
       name='category'
        value={expense.category}
         error={errors.category}
          onChange={handleChange}
          options={['Grocery', 'Clothes','Bills' ,'Education' ,'Medicine' ]}
          defaultOption = 'select category'
          />
      < Input 
      label= 'Amount'
       id= 'amount'
        name='amount'
         value={expense.amount}
          error={errors.amount}
           onChange={handleChange}/>
      <button className="add-btn">Add</button>
    </form>
  )
}