import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import Footer from '../Components/Footer'
import ListTableTdControll from '../Components/ListTableTdReport';
import Navbar from '../Components/Navbar'
import UseControllReport from '../Hooks/UseControllReport';
import icon1 from "../ico/impresora.svg"
import { generateReport } from '../utils/generateRepost';
const EmpleadosReport = () => {
    const { allDate, estados } = UseControllReport();
    const { register, handleSubmit, watch, formState: { errors }, setValue, reset } = useForm({});
    const fecha = new Date()
    const [date, setDate] = useState([])
    const [fechas, setFechas] = useState(fecha)

    useEffect(() => {
        allDate()
        return () => { }
    }, [])

    //?filtrar por Fecha actual 
    useEffect(() => {
        setDate([])
        if (estados[0]?._id) {
            const date = new Date()
            const data = estados.filter((item) => {
                if (new Date(item?.ingreso).getDate() === date.getDate() && new Date().getMonth() === date.getMonth()) {
                    return setDate((old) => [...old, item])
                }
                return
            })
        }
    }, [estados])

    const onSubmit = data => {
        const { inicio, final } = data;
        const inicioDate = new Date(inicio.split("-"))
        const finalDate = new Date(final.split("-"))
        setDate([])
        const filter = estados.filter((item) => {
            if (new Date(item?.ingreso).getDate() == inicioDate.getDate() && new Date(item?.ingreso).getMonth() === inicioDate.getMonth()) {
                if (new Date(item?.ingreso).getDate() == finalDate.getDate() && new Date(item?.ingreso).getMonth() === finalDate.getMonth()) {
                    return setDate((old) => [...old, item])
                }
                return setDate((old) => [...old, item])
            } else {
                if (new Date(item?.ingreso).getDate() == finalDate.getDate() && new Date(item?.ingreso).getMonth() === finalDate.getMonth()) {
                    return setDate((old) => [...old, item])
                }
            }
            return setDate([])
        })
        reset()
    }


    return (
        <div className='h-screen w-full grid grid-rows-6 grid-cols-1 bg-gray-200'>
            <div className='row-span-1 col-span-1 flex flex-col justify-between items-center'>
                <Navbar />
                <h1 className=''>Generar Reporte</h1>
            </div>

            <div className='row-span-5 col-span-1 flex justify-center'>
                {/* table  */}
                <div className='h-full md:h-5/6 w-5/6 lg:w-5/6   flex flex-col justify-between md:justify-start items-center  md:my-20 border '>
                    {/* //?form save  */}
                    <div className=' my-6 h-2/4 md:h-1/6  w-4/5   xl:w-2/4 flex flex-col md:flex-row justify-around items-center text-center bg-white rounded-md shadow-md shadow-gray-400'>
                        <form onSubmit={handleSubmit(onSubmit)} className='w-full h-3/5  lg:w-5/6  borber  border-gray-300  flex flex-col md:flex-row items-center  justify-around sm:justify-between md:items-center text-xs md:text-base'>
                            <label htmlFor="inicio">Fecha inicio:</label>
                            <input id='inicio' type="date" {...register("inicio", { required: true })} className='outline-none focus:ring-2 focus:ring-blue-700 focus:rounded-lg' />
                            <label htmlFor="final">Fecha final:</label>
                            <input id='final' type="date"{...register("final", { required: true })} className='outline-none focus:ring-2 focus:ring-blue-700 focus:rounded-lg' />
                            <button className=' border border-gray-400 rounded-xl p-1 bg-sky-600 text-white active:scale-105'>Filtrar</button>
                        </form>
                        <button className='w-10'><img src={icon1} alt="" className='w-10 p-1 md:w-min active:scale-105 active:shadow-sm active:shadow-gray-500 rounded-full' onClick={() => generateReport(date)} /></button>
                    </div>

                    {/* table */}
                    <div className='h-3/6 w-80 md:w-full lg:h-4/6 lg:w-5/6 overflow-auto'>
                        <table className='order-collapse h-min w-full text-black shadow-xl rounded-md border border-white bg-white overflow-hidden boder '>
                            <thead className='bg-gray-200'>
                                <tr>
                                    <th className=' border-t border-b border-r border-gray-400'>Nombre</th>
                                    <th className=' border-t border-b border-r border-gray-400'>Apellido</th>
                                    <th className=' border-t border-b border-r border-gray-400'>N° Dni</th>
                                    <th className=' border-t border-b border-r border-gray-400'>Estado</th>
                                    <th className=' border-t border-b border-r border-gray-400'>Ingreso</th>
                                    <th className=' border-t border-b border-r border-gray-400'>Egreso</th>
                                    <th className=' border-t border-b border-r border-gray-400'>Hora+</th>
                                </tr>
                            </thead>

                            <tbody className=' text-center'>
                                {
                                    date[0] ?
                                        date.map(item => <ListTableTdControll key={item._id} data={item} />)
                                        :
                                        <tr className='hover:bg-gray-200'>
                                            <td className='border-t border-b border-r border-gray-400'> Filtrar</td>
                                            <td className='border-t border-b border-r border-gray-400'>
                                                Lista vacia
                                            </td>
                                            <td className='border-t border-b border-r border-gray-400'>
                                                Lista vacia
                                            </td>

                                            <td className=' border-t border-b border-r border-gray-400'>
                                                Lista vacia
                                            </td>

                                            <td className=' border-t border-b border-r border-gray-400 text-center '>
                                                00:00:00
                                            </td>
                                            <td className=' border-t border-b border-r border-gray-400 text-center '>
                                                00:00:00
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

export default EmpleadosReport