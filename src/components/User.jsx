import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext"

export const User = () => {

  const {user} = useContext(AuthContext)

  return (
    <h2>
{user?.name}   
    </h2>
  )
}


