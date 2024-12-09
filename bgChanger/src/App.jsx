import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('red')
  function changeColor(color){
    return () => {
      setColor(color);
    }
  }

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="bg-green-100 fixed flex flex-wrap justify-center px-2 bottom-12 inset-x-0">
          <div className="flex flex-wrap justify-center gap-3 px-3 py-2 rounded-3xl bg-white shadow-lg">
            <button
              onClick={changeColor("black")}
              className="bg-black rounded-lg shadow-lg outline-none px-4 py-1 text-white font-semibold"
            >
              Black
            </button>
            <button
              onClick={changeColor("green")}
              className="bg-green-500 rounded-lg shadow-lg outline-none px-4 py-1 text-white font-semibold"
            >
              Green
            </button>
            <button
              onClick={changeColor("blue")}
              className="bg-blue-700 rounded-lg shadow-lg outline-none px-4 py-1 text-white font-semibold"
            >
              Blue
            </button>
            <button
              onClick={changeColor("olive")}
              className="bg-green-400 rounded-lg shadow-lg outline-none px-4 py-1 text-white font-semibold"
            >
              Olive
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
