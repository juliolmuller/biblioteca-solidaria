import { useState } from 'react'
import * as usersApi from '../services/users.api'

const STORAGE_KEY = 'BIBLIOTECA_SOLIDARIA::user_data'

const useAuth = () => {
  const storedData = JSON.parse(localStorage.getItem(STORAGE_KEY))
  const [isLoading, setLoading] = useState(false)
  const [isAuthenticated] = useState(!!storedData)
  const [userData] = useState(storedData)

  const refreshPage = () => {
    location.replace(location.href)
  }

  const login = async (username, password) => {
    setLoading(true)

    const [user] = await usersApi.get({
      registration: username,
      password,
    })

    setLoading(false)

    if (user) {
      // delete thisUser.password
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
      refreshPage()
    } else {
      throw new Error('Credenciais inválidas.')
    }
  }

  const logout = async () => {
    setLoading(true)
    await localStorage.removeItem(STORAGE_KEY)
    setLoading(false)
    refreshPage()
  }

  return {
    isLoading,
    userData,
    isAuthenticated,
    login,
    logout,
  }
}

export default useAuth
