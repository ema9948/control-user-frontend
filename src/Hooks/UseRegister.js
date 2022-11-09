import { useState } from 'react'
import toast from 'react-hot-toast'

const UseRegister = () => {
    const [error, setError] = useState([])
    const uri = "https://controll-emplyeds.vercel.app/api/v1/user"
    const register = (data) => {
        try {
            const res = fetch(`${uri}/register`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then((res) => {
                    if (res?.status == 201) return toast.success("Usuario Creado.")
                    if (res?.status == 200) return toast.error("El usuario ya existe.")
                })

        } catch (error) {
            console.log()
        }
    }

    return { register }
}

export default UseRegister