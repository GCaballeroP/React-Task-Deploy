
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {

  return (
    <div className="App bg-white h-screen">
      <div className='container mx-auto p-10'>
        <TaskForm />
        <TaskList />
      </div>
      
    </div>
  )
}

export default App
