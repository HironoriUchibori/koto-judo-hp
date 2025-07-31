import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import Layout from './components/Layout/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        Hello!!
      </Layout>
    </>
  )
}

export default App
