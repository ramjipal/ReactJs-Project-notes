import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const  [length, setLength] = useState(0);
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  let passwordRef = useRef(null)


  const passwordGenerator = useCallback(() =>{
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str+= "!@#$%^&*()_-"
    let strlen = str.length
    for(let i = 0; i<length; i++){
      let charidx = Math.floor(Math.random() * strlen)
      pass += str[charidx]
    }
    setPassword(pass)


  }, [numberAllowed, length, charAllowed, password])
  //passwordGenerator() ->this causes the infinite re-render due to password change(state change)
  useEffect(() => {
    
    passwordGenerator()
  }, [length, charAllowed, numberAllowed]);


  const copy = useCallback(()=>{
    
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);  //user can not select the text more than 20
    window.navigator.clipboard.writeText(password.slice(0, 20));
  }, [password])
  

  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-8 my-8 text-orange-400 bg-gray-700">
        <h1 className='text-white text-center mb-4 font-bold'>Password Generator</h1>
        <div className="flex shadow  bg-white rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="outline-none w-full py-1 px-3"
            value={password}
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={copy}>
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
             type="checkbox"
             defaultChecked = {numberAllowed}
             id = "numberInput"
             onChange={() => {
              setNumberAllowed((prev) => !prev)
             }} />
             <label htmlFor="numberInput">NumberAllowed</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked = {charAllowed}
            id="charInput"
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }} />
            <label htmlFor="charInput">CharAllowed</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
