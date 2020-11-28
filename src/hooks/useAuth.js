import { useState } from 'react'

const useAuth = () => {
  const storage = JSON.parse(localStorage.getItem('user_data'))
  const [userData, setUserData] = useState(storage)
  const isAuthenticated = Boolean(storage)

  const authenticate = (data) => {
    localStorage.setItem('user_data', JSON.stringify(data))
    setUserData(data)
  }

  return { userData, isAuthenticated, authenticate }
}

export default useAuth
