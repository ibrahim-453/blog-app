import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/header'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import ContactUs from './pages/ContactUs'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App