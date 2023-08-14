import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './components/List'
import State from './components/State'
import Photo from './components/TodoList'
import FormatDate from './components/FormatDate'
import JSX from './components/JSXtest'
import Profile from './components/Profile'
import Pro from './components/Pro'
import Gallery from './components/UseState'
import SetTimeout from './components/SetTimeout'
import Updating from './components/Updating'
import Array from './components/Array'
import Input from './components/Input'
import { Link } from "react-router-dom";
import Routertest from  "./components/Routertest";


function App() {
  const [count, setCount] = useState(0)
  const [num,setNum] = useState(0)

  const handleClick = ()=> {
    setCount(count + 1)
  }

  const click = () => {
    alert("OK is good!")
  }

  return (
    <>
      <Routertest />

      <div className='flex'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className=" w-32 logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className=" w-32 logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='text-blue-600 text-3xl'>Vite + React</h1>
      <div className="my-5">
        <button className='border-4 p-2 border-red-400' onClick={() => setNum((num) => num + 1)}>
          count is {num}
        </button>

        <button className='border-2 border-black p-2 ml-3 rounded-lg' onClick={click}>alert</button>
      </div>

      <List />

      <State count={count} onClick={handleClick} />
      <State count={count} onClick={handleClick} />

      <Photo />

      <FormatDate />

      <JSX />

      <Profile />

      <Pro />

      <Gallery />

      <SetTimeout />

      <Updating />

      <Array />

      <Input /> 

      
      
    </>
  )
}

export default App
