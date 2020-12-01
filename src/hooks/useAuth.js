import { useState } from 'react'
import users from '../data/users'

const useAuth = () => {
  const STORAGE_KEY = 'user_data'
  const storage = JSON.parse(localStorage.getItem(STORAGE_KEY))
  const [userData] = useState(storage)
  const isAuthenticated = Boolean(storage)

  const refreshPage = () => {
    // eslint-disable-next-line no-self-assign
    location.href = location.href
  }

  const login = (username, password) => {
    const user = users.find((u) => u.username === username && u.password === password)

    if (user) {
      delete user.password
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
      refreshPage()
    }
  }

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY)
    refreshPage()
  }

  return { userData, isAuthenticated, login, logout }
}

export default useAuth
