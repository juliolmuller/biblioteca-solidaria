import { useState } from 'react'
import * as booksApi from '../services/books.api'

const useBooksApi = () => {
  const [isLoading, setLoading] = useState(false)

  const getBooks = async () => {
    setLoading(true)

    try {
      return await booksApi.get()
    } catch (error) {
      throw error
    } finally {
      setLoading(false)
    }
  }

  return { isLoading, getBooks }
}

export default useBooksApi
