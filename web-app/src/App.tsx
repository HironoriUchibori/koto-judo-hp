import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import TopPage from './pages/TopPage/TopPage'
import About from './pages/About/About'
import Layout from './components/Layout/Layout';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TopPage />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="*" element={<NoMatch />} /> */} 
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
