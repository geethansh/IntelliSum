import React from 'react'
import Hero from './Components/Hero';
import Demo from './Components/Demo';
import { Analytics } from "@vercel/analytics/react"
import './App.css';
const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient'/>

      </div>
      <div className='app'>
        <Hero/>
        <Demo/>
        <Analytics/>

      </div>
    </main>
  )
}

export default App