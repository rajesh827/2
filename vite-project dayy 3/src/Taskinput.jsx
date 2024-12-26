import React from 'react'

const Taskinput = () => {
  return (
    <div>
        <div className='taskInputContainer'>
            <input className='taskInput' placeholder='Enter a task name' />
            <button className='submitBtn'>Submit</button>
       </div>
   </div>
  )
}

export default Taskinput