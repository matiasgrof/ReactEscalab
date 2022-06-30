import { useState } from 'react'
import logo from './logo.svg'
import Counter from './components/Counter'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [mount, setMount] = useState(0)

  mountCounter = () => {
    setMount(true)
  }
  unMountCounter = () => {
    setMount(true)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Counter/>
        <button onClick={mountCounter} >Mount</button>
        <button onClick={unMountCounter} >unMount</button>
      </header>
    </div>
  )
}

export default App
