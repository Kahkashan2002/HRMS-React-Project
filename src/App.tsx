import './App.css'
import Login from './Pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Employes from './Pages/Employes'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
import Profile from './Pages/Profile'
import EmployeeDetails from './Pages/EmployeeDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='employes' element={<Employes />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='profile' element={<Profile />} />
        <Route path='employee/:id' element={<EmployeeDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
