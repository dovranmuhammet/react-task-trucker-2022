import React from 'react'

const AddTask = () => {
  return (
    <div className='add-form'>
      <div className='form-control'>
        <label>Task</label>
        <input type='text' placeholder='Add Task' />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input type='text' placeholder='Day & Time' />
      </div>
      <div className='form-control'>
        <label>Set Reminder</label>
        <input type='checkbox' />
      </div>

      <input type='submit' value='Save Task' />
    </div>
  )
}

export default AddTask
