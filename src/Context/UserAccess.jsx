import React, { createContext, useState } from 'react'

export const appContext = createContext()


const UserAccess = ({ children }) => {
    const [data, setData] = useState("");
    const [empleados, setEmpleados] = useState([]);

    if (!data?.nombre) {
        let user = localStorage.getItem("user");
        user = JSON.parse(user)
        if (user != null) setData(user)
    }
    return (
        <appContext.Provider value={{ data, setData, empleados, setEmpleados }}>
            {children}
        </appContext.Provider>
    )
}
export default UserAccess;
