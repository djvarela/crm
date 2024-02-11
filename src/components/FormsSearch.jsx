
import { useNavigate } from "react-router-dom";


const FormsSearch = () => {
  // const {setSearch} = useContext(SearchContext)
  const navigation = useNavigate();

  const onSearchSubmit = (e) => {
    e.preventDefault();

  //  const text = e.target[0].value;

  //  setSearch(text)

  //  navigation(`./search?q=${text}`)
  };
  
  return (
    <>
     <form onSubmit={onSearchSubmit}>
            <input type="text" name="searchText" />
            <button>🔍</button>
          </form>
    </>
  )
}

export default FormsSearch
