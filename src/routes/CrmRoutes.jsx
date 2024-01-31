import React, { useContext } from 'react'
import { FormsNuevoCliente, Home, NavBar, SearchCliente } from '../components'
import { Route, Routes } from 'react-router-dom'
import { AgregarUser } from '../pages'
import { AuthContext } from '../auth/context/AuthContext'

export const CrmRoutes = () => {

  const {user  }= useContext(AuthContext);

  return (
    <>
    <header>
        <h2>{user.name}</h2>
        <NavBar/>
    </header>
    <main>


        <Routes>

          <Route path="/home" element={<Home />} />
          <Route path="/usuarios/agregar" element={<AgregarUser />} />
          <Route path="/search" element={<SearchCliente />} />
          <Route path="/alta-cliente" element={<FormsNuevoCliente />} />

        </Routes>
    </main>


    </>
  )
}

