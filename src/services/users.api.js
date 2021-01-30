import clonedeep from 'lodash.clonedeep'
import originalUsers from '../data/users'
import { deferCall } from '../utils/fake-api'

const make = (props) => ({
  ...props,
  id: originalUsers.reduce((max, { id }) => Math.max(max, id), 0) + 1,
})

export const get = (params = {}) => {
  const users = clonedeep(originalUsers)
  const paramEntries = Object.entries(params)
  const filteredUsers = users.filter((user) => {
    return !paramEntries.length
      || paramEntries.every(([key, value]) => {
        return user[key] === value
      })
  })

  return deferCall(() => filteredUsers)
}

export const find = (userId) => {
  return deferCall(() => {
    const users = clonedeep(originalUsers)
    const user = users.find(({ id }) => userId === id)

    return user ?? null
  })
}

export const create = (userData) => {
  return deferCall(() => {
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
      isWhatsApp: false,
      isTelegram: false,
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

    return newUser
  }, { min: 100, max: 1000 })
}
