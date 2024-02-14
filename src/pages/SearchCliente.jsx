import {  useContext, useState } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Link } from "react-router-dom";
import { AtenderCliente } from "../components";
import { getClientsFormSearch } from "../helpers";


export const SearchCliente = () => {
  const {searchState} = useContext(AuthContext)

  const [ viewModal, setViewModal ] = useState(false);

  const result = getClientsFormSearch(searchState)

const onModal = () => {

     setViewModal(!viewModal);

};

return (
    <>
      <div className="searchUserModal">
        <button>x</button>

        <div className="userContent">
          <ul>
            {result.map((li) => (
              <li key={li.id}>
                <div className="userModal">
                  {li.name}
                  <div className="userDates">
                    <small>{li.tel}</small>
                    <small>{li.email}</small>
                  </div>

                  <button onClick={onModal}>
                   Atender</button>
                </div>
              </li>
            ))}
          </ul>

          <Link to="/alta-cliente">Agregar nuevo cliente</Link>
        </div>
      </div>

      {viewModal && (<AtenderCliente atender={result} />)}
    </>
  );
};
