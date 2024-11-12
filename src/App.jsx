import React from 'react'
import Card from './Card'

function App() {
  return (
    <div>
      <h1 className='text-3xl bg-green-500 p-3 rounded-t-md'>
        Josh Doing TailWind</h1>
        <Card username= "Micheal"/>
        <Card username='Kim' post ="Software Eng"/>
        <Card username='Josh' post='Front End Dev'/>
    </div>
  )
}

export default App
