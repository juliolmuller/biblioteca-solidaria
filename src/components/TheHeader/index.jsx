import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks'
import SearchInput from '../SearchInput'
import UserControls from './UserControls'
import './styles.scss'

const TheHeader = ({ searchControls }) => {
  const { isAuthenticated } = useAuth()
  const handleSearch = () => {}

  return (
    <header id="the-header" className="navbar navbar-dark bg-main">
      <div className="container">
        <Link to="/" id="app-title" className="navbar-brand">
          Biblioteca Solidária
        </Link>
        <div className="ml-auto d-flex">
          {isAuthenticated && searchControls && (
            <SearchInput onSubmit={handleSearch} placeholder="Pesquisar..." />
          )}
          {isAuthenticated && (
            <UserControls />
          )}
        </div>
      </div>
    </header>
  )
}

export default TheHeader
