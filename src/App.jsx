import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './components/Dashboard'
import { Navbar } from './components/Navbar'
import AddEmployee from './components/AddEmployee'
import Employees from './components/Employees'
import { Footer } from './components/Footer'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import Signup from './components/Auth/signup'
import Signin from './components/Auth/signin'

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
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/sign-in' element={<Signin />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
