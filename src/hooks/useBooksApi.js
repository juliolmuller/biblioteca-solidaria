import { useState } from 'react'
import * as booksApi from '../services/books.api'

const useBooksApi = () => {
  const [isLoading, setLoading] = useState(false)

  const getBooks = async (params) => {
    setLoading(true)

    try {
      return await booksApi.get(params)
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

  const updateBook = async (bookData) => {
    setLoading(true)

    try {
      return await booksApi.update(bookData.id, bookData)
    } catch (error) {
      throw error
    } finally {
      setLoading(false)
    }
  }

  const deleteBook = (bookId) => {
    return booksApi.destroy(bookId)
  }

  return {
    isLoading,
    getBooks,
    findBookById,
    createNewBook,
    updateBook,
    deleteBook,
  }
}

export default useBooksApi
