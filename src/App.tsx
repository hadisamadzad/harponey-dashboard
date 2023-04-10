import { useState } from 'react'
import './App.css'
import { Gallery } from './components/Gallery'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <button onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </button>
      <Gallery />
    </div>
  )
}

export default App
