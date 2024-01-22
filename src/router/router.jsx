import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import SearchCliente  from "../components/SearchCliente.jsx";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/home",
        element: <App/>
      }

    ]
  },

  {
    path: '/home/search',
    element: <SearchCliente />
  }
])