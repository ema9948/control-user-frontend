import React from 'react'

const ListTableTd = ({ data, del, pacht }) => {
    return (
        <tr className='hover:bg-slate-200'>
            <td className='px-4  border-t border-b border-r border-gray-400'>{data?.nombre}</td>
            <td className='px-4  border-t border-b border-r border-gray-400'>{data?.apellido}</td>
            <td className='px-4  border-t border-b border-r border-gray-400'>{data?.dni}</td>
            <td className='px-4  border-t border-b border-r border-gray-400 text-center'>
                <button className=' border border-gray-400 rounded-xl px-1 bg-green-500 active:scale-105 font-bold' onClick={() => pacht(data)} >Edit</button>
            </td>
            <td className='px-4  border-t border-b border-r border-gray-400 text-center'>
                <button className=' border border-gray-400 rounded-xl px-1 bg-red-500 active:scale-105 font-bold' onClick={() => del(data?._id)}  >Delete</button>
            </td>
        </tr >
    )
}

export default ListTableTd