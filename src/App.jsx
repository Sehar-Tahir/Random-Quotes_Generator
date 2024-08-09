import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Quote from './components/Quote'

function App() {
    const [count, setCount] = useState(0)
  return (
    <>
    <div className='flex justify-center items-center flex-col' id='bg'>
    <h1 className='text-4xl my-10 font-bold'>Random Quotes Generator</h1>
      <Quote/>
      <h1 className='text-2xl my-10'>Made by :-  Sehar Tahir &hearts;</h1>
    </div>
    </>
  )
}

export default App
