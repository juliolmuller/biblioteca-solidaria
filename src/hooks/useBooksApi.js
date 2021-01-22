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

  const findBookById = async (bookId) => {
    setLoading(true)

    try {
      return await booksApi.find(bookId)
    } catch (error) {
      throw error
    } finally {
      setLoading(false)
    }
  }

  const createNewBook = async (bookData) => {
    setLoading(true)

    try {
      return await booksApi.create(bookData)
    } catch (error) {
      throw error
    } finally {
      setLoading(false)
    }
  }

  return { isLoading, getBooks, findBookById, createNewBook }
}

export default useBooksApi
