import { useEffect } from "react"

import { useNavigate } from "react-router-dom"

export const auth = () => {

  const redirect = useNavigate()

  const isLog = localStorage.getItem('log') || false

  useEffect(() => {
    if (!isLog) {
      redirect('/login')
    }
  }, [isLog])

}


