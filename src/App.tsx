import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/landing/Navbar'

function App() {
  const [count, setCount] = useState(0)
  // need to change this
  return (
    <>
     <Navbar/>
    </>
  )
}

export default App
