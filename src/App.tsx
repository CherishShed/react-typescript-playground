// import { useState } from 'react'
import './App.css'
import { Greet } from './components/greet'

function App() {
  return (
    <Greet name='Cherish' count={11} isLoggedIn={true}/>
  )
}

export default App
