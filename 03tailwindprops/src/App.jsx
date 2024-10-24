import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)
 

  return (
    <>
      <h1 className=' bg-green-400 text-black p-4 rounded-xl mb-4 ' >Tailwind test</h1>
      <Card username="Daniah is KING!" hobby='Dance' wd='100' image= 'https://images.pexels.com/photos/3760376/pexels-photo-3760376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'   />
      <Card username='Sadik' hobby='Digital Marketing' image="https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card username='KINGGGG'hobby=' Traveliing' image='https://images.pexels.com/photos/7841788/pexels-photo-7841788.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' />
      
    </>
  )
}

export default App
