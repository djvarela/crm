import { useContext, useState } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Link } from "react-router-dom";
import { AtenderCliente } from "../components";
import { getClientsFormSearch } from "../helpers";
import Record from "../components/customers/Record";

export const SearchCliente = () => {
  const { searchState } = useContext(AuthContext);

  const [viewModal, setViewModal] = useState(false);
  const [viewProfile, setViewProfile] = useState(false);

  const result = getClientsFormSearch(searchState);
  



  const onModal = () => {
    setViewModal(!viewModal);
  };

  function handleProfile() {
    setViewProfile(!viewProfile);
  }
  return (
    <>
      <div className="searchUserModal">
        <button>x</button>

        <div className="userContent">
          <ul>
            {result.map((li) => (
              <li key={li.id}>
                <div className="userModal">
                  <button onClick={handleProfile}>{li.name}</button>
                  <div className="userDates">
                    <small>{li.tel}</small>
                    <small>{li.email}</small>
                  </div>

                  <button onClick={onModal}>Atender</button>
                </div>
              </li>
            ))}
          </ul>

          <Link to="/alta-cliente">Agregar nuevo cliente</Link>
        </div>
      </div>

      {viewModal && <AtenderCliente atender={result} />}
      {viewProfile && <Record result={result} setViewProfile={setViewProfile} />}
    </>
  );
};
