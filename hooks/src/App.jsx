import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCount] = useState(0)
  const addValue = () =>{
    if (counter < 20){
    setCount(counter + 1);
    }
    else{
      return;
    }
  }
  const downValue = () => {
    if (counter > 0){
    setCount(counter - 1)
    }
    else{
      return;
    }
  }

  return (
    <>
      <h1>Counter increament and decreament</h1>
      <h2>Counter: {counter}</h2>
      <button onClick= {addValue}>Up: {counter}</button>
      <button onClick = {downValue}>Down: {counter}</button>
      <footer>last value: {counter}</footer>
    </>
  )
}

export default App
