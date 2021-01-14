import clonedeep from 'lodash.clonedeep'
import originalBooks from '../data/books'
import { deferCall } from '../utils/fake-api'

export const make = (props) => ({
  ...props,
  id: originalBooks.reduce((max, { id }) => Math.max(max, id), 0) + 1,
})

export const get = () => {
  return deferCall(() => clonedeep(originalBooks))
}

export const find = (bookId) => {
  return deferCall(() => {
    const books = clonedeep(originalBooks)
    const book = books.find(({ id }) => bookId === id)

    return book ?? null
  })
}
