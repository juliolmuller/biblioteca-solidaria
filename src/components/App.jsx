import { useAuth } from '../hooks'
import AuthRoutes from '../routes/auth.jsx'
import PublicRoutes from '../routes/public.jsx'

const App = () => {
  const { isAuthenticated } = useAuth()

  return isAuthenticated
    ? <AuthRoutes />
    : <PublicRoutes />
}

export default App
