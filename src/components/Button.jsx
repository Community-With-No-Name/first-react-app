import React from 'react'

export default function Button({click, value}) {

  return (
    <>
    <button onClick={click} className='py-2 px-6 ring-2 ring-indigo-700 border-2 border-white bg-indigo-700 text-white rounded-lg'>{value}</button>
    </>
  )
}
