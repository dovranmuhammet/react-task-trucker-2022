import React, { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Get a milk',
      day: 'Feb 7th at 33',
      reminder: true,
    },
    {
      id: 3,
      text: 'Get a task',
      day: 'Feb 10th at 5:30pm',
      reminder: false,
    },
  ])

  //Delete Task
  const deleteTask = (id) => {
    console.log('Delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    console.log('Toggle', id)
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  const greeting = false
  return (
    <div className='container'>
      <h1>Hello from React</h1>
      <h3>Dovran, {greeting ? 'Salam' : 'Sagbol'}</h3>
      <Header title='Task Trucker' />

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Task'
      )}
    </div>
  )
}

export default App
