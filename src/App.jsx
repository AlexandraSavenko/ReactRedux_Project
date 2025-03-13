
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Balance from './components/Balance/Balance'
import LanguageSwitch from './components/LanguageSwitch/LanguageSwitch'
import Notes from './components/Notes/Notes'
import { useEffect } from 'react'
import { fetchTasks } from './redux/taskOps'
import Loader from './components/Loader/Loader'
import TaskList from './components/TaskList/TaskList'

function App() {
const dispatch = useDispatch()
 const local = useSelector(state => state.lang.value)
 const loading = useSelector(state => state.tasks.loading)
useEffect(()=> {
  dispatch(fetchTasks())
}, [dispatch])

 return (
    <div>
      <LanguageSwitch/>
      <h1>{`${local === 'eng' ? 'Hello' : local === 'ukr' ? 'Привіт' : 'Bon jour'} React + Redux`}</h1>

      <Balance/> 
      <div className='listsWrap'>
      <div>
      <Notes/>
      </div>
      <div>
      {loading && <Loader/>}
      <TaskList/>
      </div>
      </div>
    </div>
  )
}

export default App
