import React from 'react'
import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Contexts/Usercontext'
import Loading from '../Pages/Shared/Loading'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()
  if (loading) {
    return <Loading></Loading>
  }
  if (user && user.uid) {
    return children
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>
}

export default PrivateRoute
