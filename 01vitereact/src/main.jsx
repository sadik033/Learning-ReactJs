import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import Chai from './chai.jsx'

function MyApp(){
  return(
    <div className='card'>
      <h3>Custom iPhone</h3>
      <img src="https://cdn.mos.cms.futurecdn.net/yDn3ZSXu9eSBxmXQDZ4PCF-1200-80.jpg" alt="iphone" />
      <h3>iPhone</h3>
      <p>Apple</p>
      <p><b>₹90,000</b></p>
    </div>
  )
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
    <MyApp />
    <MyApp />
  </StrictMode>,
)
