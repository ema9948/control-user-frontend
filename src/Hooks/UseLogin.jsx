import { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { appContext } from '../Context/UserAccess'

const UseLogin = () => {
    const { data, setData } = useContext(appContext)
    const [error, setError] = useState([])
    const uri = "https://controll-emplyeds.vercel.app/api/v1/user"
    const login = (data) => {
        try {
            const res = fetch(`${uri}/login`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then((res) => res.json())
                .then((res) => {
                    if (res?.nombre) {
                        setData(res?.nombre)
                        localStorage.setItem("user", JSON.stringify({ nombre: res?.nombre }))
                        localStorage.setItem("token", JSON.stringify(res?.token.token))
                    }
                    if (!res?.nombre) return toast.error("Credenciales Incorrectas.")
                })

        } catch (error) {
            console.log()
        }
    }

    return { login }
}

export default UseLogin