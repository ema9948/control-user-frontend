import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import Navbar from '../Components/Navbar';
import toast, { Toaster } from 'react-hot-toast';
import UseAddEmpleado from '../Hooks/UseControllEmpleado';
import { appContext } from '../Context/UserAccess';
import ListTableTd from '../Components/ListTableTdEmpleado';
import Footer from '../Components/Footer';

const EmpleadosAdd = () => {
    const { empleados } = useContext(appContext)
    const { addEmpleado, allEmpleado, deleteEmpleado, updateEmpleado } = UseAddEmpleado();
    const { register, handleSubmit, watch, formState: { errors }, setValue, reset } = useForm({});
    const [pacht, setPacht] = useState({})

    const onSubmit = data => {
        if (!pacht?._id) {
            addEmpleado(data)
            reset()
        }
        if (pacht?._id) {
            updateEmpleado(data, pacht?._id)
            setPacht({})
            reset()
        }

        setTimeout(() => {
            allEmpleado()
        }, 100);
    }

    useEffect(() => {
        allEmpleado()

        return () => { }
    }, [])

    // useEffect(() => {
    //     if (errors?.["nombre", "apellido", "sector"]) {
    //         const message = errors?.["nombre", "apellido", "sector"].message
    //         console.log(message)
    //         toast(message)

    //     }
    // }, [errors])

    return (
        <div className='h-screen w-full grid grid-rows-6 grid-cols-1 bg-gray-200'>
            <div className='row-span-1 col-span-1'>
                <Navbar />
            </div>

            <div className='row-span-5 col-span-1'>
                <div className='h-full flex flex-col justify-start items-center gap-3'>
                    <h1 className=' font-extrabold text-4xl '>Lista de Empleados</h1>
                    {/* formulario */}
                    {
                        pacht?._id ?

                            <form onSubmit={handleSubmit(onSubmit)} className='h-2/5 md:h-1/5 w-5/6 lg:w-2/4  flex flex-col md:flex-row md:gap-10  md:px-10 items-center justify-around bg-white shadow-2xl rounded-xl' >
                                <input id='nombre' {...register("nombre", { required: "Campo requerido", minLength: { value: 4, message: "minimo de 4 caracteres" } }, setValue("nombre", pacht?.nombre))} type="text" className='w-3/4 border-b-2 border-black md:w-full outline-none focus:border-b-2 focus:border-blue-500' placeholder='Nombre' />
                                <p className='text-xs text-red-500'>{errors?.nombre?.message}</p>
                                <input id='apellido' {...register("apellido", { required: "Campo requerido", minLength: { value: 4, message: "minimo  4 caracteres" } }, setValue("apellido", pacht?.apellido))} type="text" className='w-3/4 border-b-2 border-black md:w-full outline-none focus:border-b-2 focus:border-blue-500' placeholder='Apellido' />
                                <p className='text-xs text-red-500'>{errors?.apellido?.message}</p>
                                <input id="sector" {...register("dni", { required: "Campo requerido", minLength: { value: 4, message: "Dni no valido." }, maxLength: { value: 8, message: "Dni no valido" } }, setValue("dni", pacht?.dni))} className='w-3/4 border-b-2 border-black md:w-full outline-none focus:border-b-2 focus:border-blue-500' type="text" placeholder='N° Dni' />
                                <p className='text-xs text-red-500'>{errors?.sector?.message}</p>
                                <button type='submit' className=' border border-gray-400 rounded-xl p-1 bg-green-500 active:scale-105 font-bold'>Editar</button>

                            </form>
                            :
                            <form onSubmit={handleSubmit(onSubmit)} className='h-2/5 md:h-1/5 w-5/6 lg:w-2/4  flex flex-col md:flex-row md:gap-10  md:px-10 items-center justify-around bg-white shadow-2xl rounded-xl' >
                                <input id='nombre' {...register("nombre", { required: "Campo requerido", minLength: { value: 4, message: "minimo de 4 caracteres" } })} type="text" className='w-3/4 border-b-2 border-black md:w-full outline-none focus:border-b-2 focus:border-blue-500' placeholder='Nombre' />
                                <p className='text-xs text-red-500'>{errors?.nombre?.message}</p>
                                <input id='apellido' {...register("apellido", { required: "Campo requerido", minLength: { value: 4, message: "minimo  4 caracteres" } })} type="text" className='w-3/4 border-b-2 border-black md:w-full outline-none focus:border-b-2 focus:border-blue-500' placeholder='Apellido' />
                                <p className='text-xs text-red-500'>{errors?.apellido?.message}</p>
                                <input id="dni" {...register("dni", { required: "Campo requerido", minLength: { value: 4, message: "Dni no valido." }, maxLength: { value: 8, message: "Dni no valido" } }, setValue("sector", pacht?.sector))} className='w-3/4 border-b-2 border-black md:w-full outline-none focus:border-b-2 focus:border-blue-500' type="text" placeholder='N° Dni' />
                                <p className='text-xs text-red-500'>{errors?.sector?.message}</p>
                                <button type='submit' className=' border border-gray-400 rounded-xl p-1 bg-green-500 active:scale-105 font-bold'>Ingresar</button>

                            </form>

                    }
                    {/* tabla */}
                    <div className=' h-4/6 md:h-4/6  w-5/6 overflow-auto    '>
                        <table className='border-collapse h-min w-full text-black shadow-xl rounded-md border border-white bg-white overflow-hidden boder '>
                            <thead className=' bg-gray-200'>
                                <tr>
                                    <th className='px-4  border-t border-b border-r border-gray-400' >Nombre</th>
                                    <th className='px-4  border-t border-b border-r border-gray-400'>Apellido</th>
                                    <th className='px-4  border-t border-b border-r border-gray-400'>N° Dni</th>
                                    <th className='px-4  border-t border-b border-r border-gray-400'>Editar</th>
                                    <th className='px-4  border-t border-b border-r border-gray-400'>Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    empleados[0]?._id ?
                                        empleados.map((item) => <ListTableTd key={item?._id} data={item} del={deleteEmpleado} pacht={setPacht} />)
                                        :
                                        <tr className='text-center'>
                                            <td className='px-4  border-t border-b border-r border-gray-400 text-center'>Lista vacia</td>
                                            <td className='px-4  border-t border-b border-r border-gray-400 text-center'>Lista vacia</td>
                                            <td className='px-4  border-t border-b border-r border-gray-400 text-center'>Lista vacia</td>
                                            <td className='px-4  border-t border-b border-r border-gray-400 text-center'>
                                                <button className=' border border-gray-400 rounded-xl px-1 bg-green-500 active:scale-105 font-bold'>Edit</button>
                                            </td>
                                            <td className='px-4  border-t border-b border-r border-gray-400 text-center'>
                                                <button className=' border border-gray-400 rounded-xl px-1 bg-red-500 active:scale-105 font-bold'>Delete</button>
                                            </td>
                                        </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default EmpleadosAdd