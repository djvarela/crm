import { Route, Routes } from "react-router-dom";
import { FormsNuevoCliente, Home, SearchCliente } from "../components";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<SearchCliente />} />
        <Route path="/alta-cliente" element={<FormsNuevoCliente />} />


      </Routes>
    </>
  );
};

export default AppRouter;
