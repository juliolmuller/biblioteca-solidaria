import Header from '../../components/TheHeader'
import HorizontalLine from '../../components/HorizontalLine'
import './styles.scss'

const UserDetails = () => (
  <div id="user-details">
    <Header searchControls />

    <div className="container">
      <HorizontalLine />

      <h1 className="page-title">
        Hello, UserDetails!
      </h1>
    </div>
  </div>
)

export default UserDetails
