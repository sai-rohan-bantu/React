
import Chai from "./chai"

function App() {
  const username='rohan'
  // here {username} is evaluated expression 
  return (
    <>
    <Chai/>
    
    <p> | {username}</p>
    </>
     
  )
}

export default App
