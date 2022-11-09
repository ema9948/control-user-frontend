import React from 'react'

const ListTableTdControll = ({ data }) => {
    const { ingreso, egreso } = data
    const ingreso_date = new Date(ingreso)
    const egreso_date = new Date(egreso)
    return (
        <tr className='hover:bg-gray-200'>
            <td className='border-t border-b border-r border-gray-400'>{data?.empleado?.nombre}</td>
            <td className='border-t border-b border-r border-gray-400'>
                {data?.empleado?.apellido}
            </td>
            <td className='border-t border-b border-r border-gray-400'>
                {data?.empleado?.dni}
            </td>

            <td className=' border-t border-b border-r border-gray-400'>
                {data?.estado ? "Presente" : "Ausente"}
            </td>
            <td className=' border-t border-b border-r border-gray-400 text-center '>
                {
                    ingreso_date.getMinutes() < 10 ? ` ${ingreso_date.getHours()}:${ingreso_date.getMinutes()}0:${ingreso_date.getSeconds()} | (${ingreso_date.getFullYear()}/${ingreso_date.getMonth() + 1}/${ingreso_date.getDate()})` : `${ingreso_date.getHours()}:${ingreso_date.getMinutes()}:${ingreso_date.getSeconds()} | (${ingreso_date.getFullYear()}/${ingreso_date.getMonth() + 1}/${ingreso_date.getDate()})`
                }
            </td>
            <td className=' border-t border-b border-r border-gray-400 text-center '>
                {
                    data?.egreso ?
                        egreso_date.getMinutes() < 10 ? `${egreso_date.getHours()}:${egreso_date.getMinutes()}0:${egreso_date.getSeconds()} | (${ingreso_date.getFullYear()}/${ingreso_date.getMonth() + 1}/${ingreso_date.getDate()})` : `${egreso_date.getHours()}:${egreso_date.getMinutes()}:${egreso_date.getSeconds()} | (${egreso_date.getFullYear()}/${egreso_date.getMonth() + 1}/${egreso_date.getDate()})`
                        :
                        "NN:NN:NN"
                }
            </td>
            <td className=' border-t border-b border-r border-gray-400 text-center '>
                {
                    data?.extra ? `${data?.extra}+` : data?.extra
                }
            </td>
        </tr>
    )
}

export default ListTableTdControll