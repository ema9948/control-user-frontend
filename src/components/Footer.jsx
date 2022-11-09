import React from 'react'

const Footer = () => {
    return (
        <div className=' text-center font-thin bg-white shadow-md shadow-gray-400 h-min w-full'>
            <p>Copyright©{new Date().getFullYear()} – Todos los derechos reservados</p>
        </div>
    )
}

export default Footer