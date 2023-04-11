import { useState } from 'react'
import './App.css'
import { Gallery } from './components/Gallery'
import Sidebar from './components/Sidebar'


const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Sidebar />
      <button onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </button>
      <Gallery />
    </div>
  )
}

export default App
