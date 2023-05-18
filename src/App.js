import React from 'react'
import Head from './components/Head'
import Features from './components/Features'
import "./App.css"
import Button from './components/Button'
export default function App() {
      const [count, setCount] = React.useState(0)
    const Increment = () => {
       setCount(count+1)
    }
    const Decrement = () => {
       setCount(count-1)
    }
    
  return (
    <div className='flex flex-col h-screen items-center justify-center gap-5'>
    <div className="text-7xl text-gray-900">{count}</div>
    <div className='flex max-w-2xl gap-5'>
      <Button value={"Add"} click={Increment}></Button>
      <Button  value={"Substract"} click={Decrement}></Button>
    </div>
      </div>
  )
}
