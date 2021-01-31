import clonedeep from 'lodash.clonedeep'
import originalUsers from '../data/users'
import { deferCall } from '../utils/fake-api'

const extractData = (userData) => ({
  isWhatsApp: Boolean(userData.isWhatsApp),
  isTelegram: Boolean(userData.isTelegram),
  registration: userData.registration,
  dateOfBirth: userData.dateOfBirth,
  phoneNumber: userData.phoneNumber,
  emails: userData.emails ?? [],
  firstName: userData.firstName,
  lastName: userData.lastName,
  password: userData.password,
  avatar: userData.avatar,
})

export const make = (props) => ({
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
    const user = extractData(userData)
    const newUser = make(user)

    originalUsers.push(newUser)

    return newUser
  })
}

export const update = async (userId, userData) => {
  const userReference = originalUsers.find(({ id }) => userId === id)
  const userIndex = originalUsers.indexOf(userReference)
  const { password, ...user } = await find(userId)
  const newUser = {
    ...user,
    ...extractData(userData),
    password,
  }

  originalUsers[userIndex] = newUser

  return newUser
}
