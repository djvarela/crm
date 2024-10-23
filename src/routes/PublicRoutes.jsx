import React, { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext'
import { Navigate } from 'react-router-dom'

export const PublicRoutes = ({children}) => {

  const {login} = useContext( AuthContext )
  
  return ( login)
          ? children
          :<Navigate to='/home' />

}


