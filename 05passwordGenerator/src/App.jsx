import { useCallback, useState, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [charAllow, setcharAllow]= useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef()

  const passwordgenerator = useCallback(()=>{
    let pass =""
    let str = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllow) str += "0123456789"
    if(charAllow) str += "!@#$%^&*()_-{}[]`~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)

      pass += str.charAt(char)
    }
    setPassword(pass)


  },[length,numberAllow,charAllow, setPassword])

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },
  [password])

  useEffect(()=>{
    passwordgenerator()
  },[length,numberAllow,
    charAllow, passwordgenerator
  ])
  return (
    <>
   
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg
   px-4 py-3 my-8 text-orange-500 bg-gray-800'>
    <h1 className=' text-center font-semibold text-white my-3' >Password generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input 
    type="text" 
    value={password}
    className='outline-none w-full py-1 px-3'
    placeholder='Password'
    readOnly
    ref={passwordRef}
  />
  <button
  onClick={copyToClipboard}
   className='outline-none bg-blue-700 text-white px-3 py-0.5
   shrink-0'>Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) =>{setLength(e.target.value)}}
        />
        <label> Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={numberAllow}
        id='numberInput'
        onChange={()=>{
          setNumberAllow((prev)=> !prev);
        }}
        />
         <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllow}
              id="characterInput"
              onChange={()=>{
                setcharAllow((prev)=> !prev);
              }}
          />
          <label htmlFor="characterInput">Characters</label>

      </div>
    </div>
    </div>
    </>
  )
}

export default App