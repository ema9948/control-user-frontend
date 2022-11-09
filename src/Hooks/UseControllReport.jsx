import React, { useState } from 'react'

const UseControllReport = () => {
    const token = JSON.parse(localStorage.getItem("token"))
    const [estados, setEstados] = useState([]);
    const uir = "https://controll-emplyeds.vercel.app/api/v1/estados"
    const allDate = () => {
        try {
            const res = fetch(`${uri}/allEstado`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`, // notice the Bearer before your token
                }
            })
                .then(res => res.json())
                .then(res => setEstados(res))
        } catch (error) {
            console.log(error)
        }
    }

    return { allDate, estados }
}

export default UseControllReport