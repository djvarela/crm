import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Aside = () => {

  const { user } = useContext(AuthContext);

  
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

function onLogout() {

    logout();

    navigate("/login");
  }

  return (
    <aside>
     
    <ul>
      <li><Link to="/home">Home</Link></li>
      <li>
        <a href="">Users</a>
        <ul><Link to="/usuarios/agregar">Agregar usuarios</Link></ul>
      </li>
      <li><a href="">Clients</a></li>
      <li><a href="">Leads</a></li>


    </ul>

    <footer>
    <button onClick={onLogout}>Salir</button>
    </footer>

    </aside>
  )
}

export default Aside
