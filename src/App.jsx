import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/header'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App