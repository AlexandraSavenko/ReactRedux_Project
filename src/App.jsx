
import { useSelector } from 'react-redux'
import './App.css'
import Balance from './components/Balance/Balance'
import LanguageSwitch from './components/LanguageSwitch/LanguageSwitch'

function App() {
 const local = useSelector(state => state.lang.value)
  return (
    <div>
      <LanguageSwitch/>
      <h1>{`${local === 'eng' ? 'Hello' : local === 'ukr' ? 'Привіт' : 'Bon jour'} React + Redux`}</h1>

      
      <Balance/>
    </div>
  )
}

export default App
