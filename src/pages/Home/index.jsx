import { useAuth } from '../../hooks'

const Home = () => {
  const { logout } = useAuth()

  return (
    <div id="home">
      <h1 className="text-main">
        Hello, Home!
      </h1>

      <button type="button" className="btn btn-primary" onClick={logout}>
        SAIR
      </button>
  </div>
  )
}

export default Home
