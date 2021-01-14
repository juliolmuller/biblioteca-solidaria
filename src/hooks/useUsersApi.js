import { useState } from 'react'
import * as usersApi from '../services/users.api'

const useUsersApi = () => {
  const [isLoading, setLoading] = useState(false)

  const createNewUser = async (userData) => {
    setLoading(true)

    try {
      return await usersApi.create(userData)
    } catch (error) {
      throw error
    } finally {
      setLoading(false)
    }
  }

  return { isLoading, createNewUser }
}

export default useUsersApi
