import { useState } from "react";
import { Link } from "react-router-dom";

import { getClientsFormSearch } from "../helpers";
import { AtenderCliente } from "../components";

export const SearchCliente = () => {

  
  const results = getClientsFormSearch(search);

  const [ viewModal, setViewModal ] = useState(false);

  const onModal = (li) => {
   
    setAtender(li);
    setViewModal(!viewModal);

  };

  return (
    <>
      <div className="searchUserModal">
        <button>x</button>

        <div className="userContent">
          <ul>
            {results.map((li) => (
              <li key={li.id}>
                <div className="userModal">
                  {li.nombre} {li.apellido}
                  <div className="userDates">
                    <small>{li.telefono}</small>
                    <small>{li.email}</small>
                  </div>

                  <button onClick={() => onModal(li)}>
                   Atender</button>
                </div>
              </li>
            ))}
          </ul>

          <Link to="/alta-cliente">Agregar nuevo cliente</Link>
        </div>
      </div>

      {viewModal && (<AtenderCliente  />)}
    </>
  );
};
