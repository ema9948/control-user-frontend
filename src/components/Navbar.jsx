
import React, { useContext } from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import { appContext } from '../Context/UserAccess'

const Navbar = () => {
    const { setData, data } = useContext(appContext);
    const logout = () => {
        window.localStorage.clear()
        setTimeout(() => {
            setData("")
        }, 150);
    }

    return (
        <div className='w-full h-1/4  flex items-center justify-around border shadow-lg shadow-gray-300 bg-white'>
            <NavLink to={"/control"} className={({ isActive }) => isActive ? 'font-bold border-b-4 border-sky-500' : 'border-b-2 border-black font-thin'}>Empleados</NavLink>
            <NavLink to={"/report"} className={({ isActive }) => isActive ? 'font-bold border-b-4 border-sky-500' : 'border-b-2 border-black font-thin'}>Generar Reporte</NavLink>
            <NavLink to={"/"} className={({ isActive }) => isActive ? 'font-bold border-b-4 border-sky-500' : 'border-b-2 border-black font-thin'}>Controll Empleado</NavLink>
            <button className="border-b-2 border-black" onClick={logout}>Cerrar Seccion</button>
        </div >
    )
}

export default Navbar