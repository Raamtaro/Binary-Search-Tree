import { useState } from 'react'
import Tree from './bstVanillaJS/classes/bstClass.js'


function App() {
  const [count, setCount] = useState(0)
  console.log(new Tree([4, 5, 6, 2, 3, 1, 56, 6, 32 , 2]))

  return (
    <>
      Hello World
    </>
  )
}

export default App
