import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks'

const UserControls = () => {
  const { userData, logout } = useAuth()
  const [menuShown, setMenuShown] = useState(false)

  return (
    <div className="user-controls dropdown">
      <button
        type="button"
        id="user-menu"
        className="btn btn-main"
        aria-haspopup="true"
        aria-expanded="false"
        onClick={() => setMenuShown(!menuShown)}
      >
        <span>{userData.firstName}</span>
        <img src={ userData.avatar} alt="avatar do usuário" className="rounded-circle" />
      </button>
      {menuShown && (
        <div
          className="dropdown-menu"
          aria-labelledby="user-menu"
          onMouseLeave={() => setMenuShown(false)}
        >
          <Link to="/usuario" className="dropdown-item">
            <i className="fas fa-user-cog mr-3"></i>
            Meu Perfil
          </Link>
          <button className="dropdown-item" type="button" onClick={logout}>
            <i className="fas fa-door-open mr-3"></i>
            Sair
          </button>
        </div>
      )}
    </div>
  )
}

export default UserControls
