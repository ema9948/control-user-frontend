import React from 'react'
import { useForm } from 'react-hook-form';
import { Toaster } from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import Footer from '../Components/Footer';
import UseRegister from '../Hooks/UseRegister';

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { register: add } = UseRegister()

    const onSubmit = data => add(data)
    return (
        <div className='h-screen w-full grid grid-rows-6 grid-cols-1 bg-bgLogin bg-no-repeat bg-cover bg-center font-sans'>
            <div className='row-span-6 col-span-1'>
                <div className='flex-1 h-full w-full flex flex-col gap-y-5 justify-center items-center'>
                    <div className='text-center bg-white p-5 rounded-md shadow-md shadow-gray-50'>
                        <h1 className='text-4xl font-extrabold'>Hotel Romadrid</h1>
                        <h5 className='font-semibold'>Control de Empleados</h5>
                        <h2 className='text-3xl font-extrabold'>Registro de Usuario</h2>
                    </div>
                    {/*//? form */}
                    <form onSubmit={handleSubmit(onSubmit)} className='w-5/6 lg:w-2/6 h-2/4 outline-none focus:border-b-sky-600 shadow-md focus:shadow-gray-300 flex flex-col justify-around items-center bg-white  rounded-md shadow-gray-50' >
                        <div className='w-2/4'>
                            <label htmlFor="nombre" className='block'>Nombre</label>
                            <input id='nombre' {...register("nombre", { required: "Campo requerido", minLength: { value: 4, message: "Ingrese un nombre con un minimo de  4 caracteres" } })} type="text" className='border-b-2 border-b-black focus:border-b-2 outline-none focus:border-b-sky-600 shadow-md focus:shadow-gray-300 w-full' placeholder='Nombre' />
                            <p>{errors?.nombre?.message}</p>
                        </div>
                        <div className='w-2/4'>
                            <label htmlFor="password" className='block'>Contraseña</label>
                            <input id="password" {...register("password", { required: "Campo requerido", minLength: { value: 8, message: "Ingrese una contraseña  con un minimo  8 caracteres" } })} className='border-b-2 border-b-black focus:border-b-2 outline-none focus:border-b-sky-600 shadow-md focus:shadow-gray-300 w-full' type="password" placeholder='Contraseña' />
                            <p>{errors?.password?.message}</p>
                        </div>
                        <button type='submit' className=' border border-black rounded-md p-2 bg-gray-200 shadow-lg active:scale-105 active:shadow-gray-300 font-semibold '>Registrar</button>
                    </form>

                    <div className='w-5/6 sm:w-2/6 flex justify-around'>
                        <NavLink to={"/login"} className="bg-white rounded-lg px-3 py-1 shadow-md shadow-gray-50 active:scale-105 font-semibold">Login</NavLink>
                    </div>
                </div>
            </div>
            <Toaster />
            <Footer />
        </div>
    )
}

export default Register