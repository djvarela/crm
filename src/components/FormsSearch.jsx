
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";
import { useContext } from "react";


const FormsSearch = () => {
  const { setSearchState } = useContext(AuthContext)
  const navigation = useNavigate();

  const onSearchSubmit = (e) => {
    e.preventDefault();

    const search = e.target.search.value;
    setSearchState(search)
    navigation(`./search?q=${search}`)
  };

  return (
    <>
      <form onSubmit={onSearchSubmit}>
        <input type="text" name="search" />
        <button>🔍</button>
      </form>
    </>
  )
}

export default FormsSearch
