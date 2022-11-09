import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { appContext } from '../Context/UserAccess'

const ProtectedRoute = ({ user, children }) => {
    const { data } = useContext(appContext)
    if (!data?.nombre) {
        return <Navigate to={"/login"} />
    }
    return children
}

export default ProtectedRoute