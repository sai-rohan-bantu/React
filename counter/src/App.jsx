import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
     //let counter =15

     let [counter, setCounter]= useState(15)

     const addValue = () => {
         counter = counter +1
         console.log("button addValue clicked")
         setCounter(counter)
         // you can also update counter inside useState(counter+1)
     }

     const removeValue = () => {
      setCounter(counter -1)
     }

  return (
    <>
        <h1>React</h1>
        <h2>Counter Value : {counter}</h2>
        <button onClick={addValue}>Add Value {counter}</button>
        <br />
        <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
