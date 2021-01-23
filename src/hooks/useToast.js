import { useToasts } from 'react-toast-notifications'

const options = {
  autoDismiss: true,
  autoDismissTimeout: 8000,
  transitionDuration: 300,
}

const useToast = (customOptions = {}) => {
  const { addToast } = useToasts()
  const mergedOptions = { ...options, ...customOptions }

  return {
    success: (message) => addToast(message, { ...mergedOptions, appearance: 'success' }),
    warning: (message) => addToast(message, { ...mergedOptions, appearance: 'warning' }),
    error: (message) => addToast(message, { ...mergedOptions, appearance: 'error' }),
    info: (message) => addToast(message, { ...mergedOptions, appearance: 'info' }),
  }
}

export default useToast
