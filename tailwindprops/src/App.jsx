import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "rohan",
    age : 23
  }

  let newArr=[]

  return (
    <>
           <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind</h1>
           <Card username="sairohan" btnText="click me"/>
           <Card username="viratkohli" />
    </>
  )
}

export default App
