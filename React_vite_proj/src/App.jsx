import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx"
import ProfileCard from "./components/ProfileCard.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
    <Header />
    <main>
      <ProfileCard />
    </main>
    </div>
  )
}

export default App
