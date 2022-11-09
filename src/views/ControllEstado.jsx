import React from 'react'
import { useForm } from 'react-hook-form'
import { Toaster } from 'react-hot-toast'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import UseControllEstado from '../Hooks/UseControllEstado'

const ControllEstado = () => {
    const { addEstado } = UseControllEstado()
    const { register, handleSubmit, watch, formState: { errors }, setValue, reset } = useForm({});
    const onSubmit = data => {
        addEstado(data)
        reset()
    }

    return (
        <div className='h-screen w-full grid grid-rows-6 grid-cols-1  bg-zinc-200'>

            <div className='row-span-1 col-span-1'>
                <Navbar />
                <h1 className='py-10  text-center font-extrabold text-3xl underline underline-offset-4'>Controll de Ingreso e Egreso de Empleados</h1>
            </div>
            <div className='row-span-5 col-span-1 flex flex-col justify-between items-center'>
                <form onSubmit={handleSubmit(onSubmit)} className='py-10 h-4/6 w-2/6 flex flex-col items-center justify-around bg-white rounded-md shadow-md shadow-gray-400'>
                    <label htmlFor="dni" className='font-thin text-3xl text'>Ingrese su DNI</label>
                    <input  {...register("dni", { required: "Ingrese su DNI", minLength: { value: 8, message: "DNI NO VALIDO" }, maxLength: { value: 8, message: "DNI NO VALIDO" } })} id="dni" type="number" placeholder='N° DNI' className='border border-black outline-none border-t-0 border-r-0 border-l-0 border-b focus:border-blue-500 focus:border-b-2 font-extrabold placeholder:text-center' />
                    <p className='font-semibold text-md text-red-500'>{errors?.dni?.message}</p>
                    <button className='font-semibold uppercase border border-gray-100 p-1 active:scale-105 rounded-lg bg-gray-200 shadow-md shadow-gray-400  active:shadow-gray-600'>Ingresar</button>
                </form>
                <Toaster />
                <Footer />
            </div>
        </div>
    )
}

export default ControllEstado