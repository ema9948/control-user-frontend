import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { appContext } from '../Context/UserAccess'

const UseAddEmpleado = () => {
    const { empleados, setEmpleados } = useContext(appContext)
    const token = JSON.parse(localStorage.getItem("token"))
    const uri = "https://controll-emplyeds.vercel.app/api/v1/empleados"
    const addEmpleado = (data) => {
        if (!token) return console.log("token error")
        try {

            const res = fetch(`${uri}/addEmpleado`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`, // notice the Bearer before your token
                },
                body: JSON.stringify(data)

            })
                .then(res => res.json())
                .then(res => {
                    if (res?.admin) return toast.error(res?.admin)
                })
                .catch(res => { console.log(res) })
        } catch (error) {


        }
    }
    const allEmpleado = () => {
        try {
            const res = fetch(`${uri}/allEmpleados`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`, // notice the Bearer before your token
                }

            })
                .then(res => res.json())
                .then(res => {
                    setEmpleados([...(res.reverse())])
                }
                )

                .catch(res => { console.log(res) })
        } catch (error) {
            return toast.error("Fallo en la peticion")
        }
    }

    const deleteEmpleado = (id) => {
        try {
            if (!id) return toast.error("")
            const res = fetch(`${uri}/deleteEmpleado/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`, // notice the Bearer before your token
                }
            })
                .then(res => {
                    if (res?.ok) {
                        toast.success("Empleado Eliminado.")
                        allEmpleado()
                        return () => { }
                    }
                    if (!res?.ok) return toast.error("Error al Eliminar.")
                })
                .catch(res => { console.log(res) })
        } catch (error) {
            return toast.error("Fallo en la peticion")
        }
    }

    const updateEmpleado = (data, id) => {
        try {
            if (!id) return toast.error("")
            const res = fetch(`${uri}/pachtEmpleado/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`, // notice the Bearer before your token
                },
                body: JSON.stringify(data)
            })
                .then(res => {
                    if (res?.ok) {
                        toast.success("Empleado Eliminado.")
                        allEmpleado()
                        return () => { }
                    }
                    if (!res?.ok) return toast.error("Error al Eliminar.")
                })
                .catch(res => { console.log(res) })
        } catch (error) {
            return toast.error("Fallo en la peticion")
        }
    }
    return { addEmpleado, allEmpleado, deleteEmpleado, updateEmpleado }

}

export default UseAddEmpleado