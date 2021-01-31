import { useState } from 'react'
import { useAuth, useToast } from '../../hooks'

const LogInForm = () => {
  const toast = useToast()
  const { isLoading, login } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await login(username, password)
    } catch (error) {
      setPassword('')
      toast.error(error.message)
      setTimeout(() => document.querySelector('[type="password').focus(), 2 * 100)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">
          Código de Matrícula:
        </label>
        <div className="input-group">
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value.toUpperCase())}
            autoFocus
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <i className="fas fa-user-alt"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="password">
          Senha de Acesso:
        </label>
        <div className="input-group">
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <i className="fas fa-unlock-alt"></i>
            </span>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-secondary"
        disabled={isLoading}
      >
        Entrar
      </button>
    </form>
  )
}

export default LogInForm
