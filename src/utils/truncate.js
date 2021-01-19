
const DEFAULT_TRUNC_LENGTH = 40

const truncate = (value, length = DEFAULT_TRUNC_LENGTH, clamp = '...') => {
  if (!value || typeof value !== 'string') {
    return value
  }

  if (value.length <= length) {
    return value
  }

  const truncIndex = length - clamp.length
  let shortValue = value.slice(0, truncIndex)
  let indexOfLastChar = shortValue.length - 1

  while (indexOfLastChar > 0 && shortValue[indexOfLastChar] !== ' ' && shortValue[indexOfLastChar] !== clamp[0]) {
    indexOfLastChar--
  }

  indexOfLastChar = indexOfLastChar || truncIndex
  shortValue = shortValue.slice(0, indexOfLastChar)

  return shortValue + clamp
}

export default truncate
