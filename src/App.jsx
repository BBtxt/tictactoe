import { useState } from 'react'
import './App.css'
import  User  from '../components/User'
import List from '../components/list'

function MyButton() {
  return (
    <button>
      I'm button
    </button>
  )
}


function App() {
  

  return (
    <>
    <h2>
      whats good... 
    </h2>

    <p> check this out</p>
    <MyButton/>
    <User/>
    <List/>
    </>

  )
}

export default App
