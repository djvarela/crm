import { FormsNuevoCliente, Home, NavBar, SearchCliente } from "../components";
import { Route, Routes } from "react-router-dom";
import { AgregarUser, ClientPage, UserPage } from "../pages";
import { AuthContext } from "../auth/context/AuthContext";
import React, { useContext } from "react";
import Aside from "../components/Aside";

export const CrmRoutes = () => {


  return (
    <>
      <section className="app-container">
      <header>
            <NavBar />
      </header>


        <section className="content">
          
          <Aside />
          
        

          <section className="route-container">

            <main>
              <Routes>
              <Route path="/*" element={<Home />} />

                <Route path="/home" element={<Home />} />
                <Route path="/users" element={<UserPage />} />
                <Route path="/clients" element={<ClientPage />} />


                <Route path="/usuarios/agregar" element={<AgregarUser />} />
                <Route path="/search" element={<SearchCliente />} />
                <Route path="/alta-cliente" element={<FormsNuevoCliente />} />
              </Routes>
            </main>

          </section>
        </section>
        
      </section>
    </>
  );
};
