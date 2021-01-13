import clonedeep from 'lodash.clonedeep'
import originalUsers from '../data/users'

const MIN_DELAY = 1000
const MAX_DELAY = 3000

const delay = () => {
  const interval = MAX_DELAY - MIN_DELAY
  const random = Math.random() * interval
  const rounded = Math.floor(random)

  return rounded + MIN_DELAY
}

const make = (props) => ({
  ...props,
  id: originalUsers.reduce((max, { id }) => Math.max(max, id), 0) + 1,
})

export const get = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = clonedeep(originalUsers)

      resolve(users)
    }, delay())
  })
}

export const find = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = clonedeep(originalUsers)
      const user = users.find(({ id }) => userId === id)

      resolve(user)
    }, delay())
  })
}

export const create = (userData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const {
        avatar,
        password,
        lastName,
        firstName,
        emails = [],
        phoneNumber,
        dateOfBirth,
        registration,
      } = userData
      const newUser = make({
        registration,
        dateOfBirth,
        phoneNumber,
        firstName,
        lastName,
        password,
        emails,
        avatar,
      })

      originalUsers.push(newUser)
      resolve(newUser)
    }, delay())
  })
}
