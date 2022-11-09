import React from 'react'
import toast from 'react-hot-toast';

const UseControllEstado = () => {
    const token = JSON.parse(localStorage.getItem("token"))
    const uri = " https://controll-emplyeds.vercel.app/api/v1/estados"
    const addEstado = (data) => {
        data.fecha = new Date()
        try {
            const res = fetch(`${uri}/addEstado`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`, // notice the Bearer before your token
                },
                body: JSON.stringify(data)

            })
                .then(res => {
                    console.log(res)
                    if (res?.status === 201) return toast.success("Ingreso Resgistrado.")
                    if (res?.status === 200) return toast.success("Salida Registrada")
                    if (!res?.ok) return toast.error("El DNI no existe.")
                })
                .catch(res => { console.log() })
        } catch (error) {
            console.log(error)
        }
    }

    return { addEstado }
}

export default UseControllEstado