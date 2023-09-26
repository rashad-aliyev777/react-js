import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

// butun sehifede navbar gorsenecek

import Navbar from './components/Navbar'
import Ev from './pages/Ev'
import About from './pages/About'


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFoundPage from './pages/404'

function App() {
  
  return (

    <>
      <BrowserRouter>

        <Navbar />

          <Routes>

        <Route path='/' element={<Ev />} />
        <Route path='/haqqimizda' element={<About />} />
        <Route path='*' element={<NotFoundPage />} />
        
          </Routes>
      
      
      </BrowserRouter>
    </>

      
  )
}

export default App
