import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

// you can't render below reactElement because React expects data in particular format instead you use React.createElement() for that
// const reactElement = {
//   type : "a",
//   props : {
//       href : "https://google.com",
//       target : "_blank" 
//   },
//   children : "Click me to visit google"
// }


// this works if you are rendering object element
const element = (
  <h1>Chai aur React</h1>
)

//variable injection
const user="sai rohan"

//using React.createElement() which expects (typeof arg1, props, children)

const reactElement = React.createElement("a",{
            href: "https://google.com",
            target: "_blank"},
          "Click me to visit google",
        user)

createRoot(document.getElementById('root')).render(
  reactElement
  //  <App />

)
