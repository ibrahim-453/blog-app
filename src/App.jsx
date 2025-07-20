import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/header'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import ContactUs from './pages/ContactUs'
import { AuthProvider } from './context/AuthContext'
import Login from './pages/Login'
import Signup from './pages/SignUp'

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Header />
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App