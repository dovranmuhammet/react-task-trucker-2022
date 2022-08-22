import React, { useState } from 'react'
import Header from './components/Header'
import Todo from './Todo'

function App() {
  const [inputValue, setInputValue] = useState('')
  const greeting = false
  return (
    <div className='container'>
      <h1>Hello from React</h1>
      <h3>Dovran, {greeting ? 'Salam' : 'Sagbol'}</h3>
      <Header title='Task Trucker' />
    </div>
  )
}

export default App
