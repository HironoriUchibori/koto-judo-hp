import { useState } from 'react'
import './App.css'
import Layout from './components/Layout/Layout'
import TopPage from './pages/TopPage/TopPage'


function App() {
  return (
    <>
      <Layout>
        <TopPage />
      </Layout>
    </>
  )
}

export default App
