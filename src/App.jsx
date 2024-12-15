import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './components/Dashboard'
import { Navbar } from './components/Navbar'
import AddEmployee from './components/AddEmployee'
import Employees from './components/Employees'
import { Footer } from './components/Footer'
import { Services } from './components/Services'
import { Contact } from './components/Contact'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Employees />} />
        <Route path='/add-employee' element={<AddEmployee />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
