
const MIN_DELAY = 1000
const MAX_DELAY = 3000

const randomMilliseconds = ({ min = MIN_DELAY, max = MAX_DELAY }) => {
  const interval = max - min
  const random = Math.random() * interval
  const rounded = Math.floor(random)

  return rounded + min
}

export const deferCall = async (callback, options = {}) => {
  const result = await callback()

  return new Promise((resolve) => {
    setTimeout(
      resolve,
      randomMilliseconds(options),
      result,
    )
  })
}
