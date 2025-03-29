import { useState } from 'react'
import './App.css'
import Weather from './components/weather'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
          <Weather />
      </div>
    </>
  )
}

export default App
