import { useReducer, useState } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

import { types } from "../types/types";

const init = () => {
  const user = JSON.parse(localStorage.getItem("login"));

  return {
    logged: !!user,
    user: user,
  };
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {}, init);
  const [searchState, setSearchState]  = useState('')

function login(log ='') {
    const user = log;
    const action = { type: types.login, payload: user, };
    localStorage.setItem("login", JSON.stringify(user));

    dispatch(action);
}



function logout() {

    localStorage.removeItem("login");

    const action = {type:types.logout};

    dispatch(action);


  }




  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
        searchState, 
        setSearchState
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
