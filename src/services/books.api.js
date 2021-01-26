import clonedeep from 'lodash.clonedeep'
import originalBooks from '../data/books'
import { find as findUser } from './users.api'
import { deferCall } from '../utils/fake-api'

const extractData = (bookData) => ({
  description: bookData.description,
  testimony: bookData.testimony,
  situation: bookData.situation,
  publisher: bookData.publisher,
  language: bookData.language,
  edition: bookData.edition,
  images: bookData.images,
  author: bookData.author,
  pages: bookData.pages,
  title: bookData.title,
  owner: bookData.owner,
  year: bookData.year,
})

export const make = (props) => ({
  ...props,
  id: originalBooks.reduce((max, { id }) => Math.max(max, id), 0) + 1,
})

export const get = () => {
  return deferCall(() => clonedeep(originalBooks))
}

export const find = async (bookId) => {
  const books = clonedeep(originalBooks)
  const book = books.find(({ id }) => bookId === id)
  book.owner = await findUser(book.owner)

  return book || null
}

export const create = (bookData) => {
  return deferCall(() => {
    const book = extractData(bookData)
    const newBook = make(book)

    originalBooks.push(newBook)

    return newBook
  })
}

export const update = (bookId, bookData) => {
  return deferCall(() => {
    const existingBook = originalBooks.find(({ id }) => bookId === id)
    const bookIndex = originalBooks.indexOf(existingBook)
    const newBook = { id: bookId, ...extractData(bookData) }

    originalBooks[bookIndex] = newBook

    return newBook
  })
}
