import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Footer from './components/Footer'
import ProtectedRoute from './Components/ProtectedRoute'
import UserAccess from './Context/UserAccess'
import './index.css'
import ControllEstado from './views/ControllEstado'
import EmpleadosReport from './views/EmpleadoReport'
import EmpleadosAdd from './views/Empleados'
import Login from './views/Login'
import Register from './views/Register'
import Reset from './views/Reset'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserAccess>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ControllEstado />} />
          <Route path='/control' element={<EmpleadosAdd />} />
          <Route path="/report" element={<EmpleadosReport />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path='*' element={<h1>error</h1>} />
      </Routes>
    </BrowserRouter>
  </UserAccess>
)
