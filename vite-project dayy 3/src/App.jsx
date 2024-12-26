import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Taskinput from './Taskinput'
import TaskLists from './TaskLists'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="mainConatiner">
      <h6>Task Management System</h6>
      <Taskinput />
      <TaskLists />
    </div>


       )
            }
export default App
