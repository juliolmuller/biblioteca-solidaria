import './styles.css'
import Header from '../../components/TheHeader'

const UserDetails = () => (
  <div id="user-details">
    <Header searchControls />
    <div className="container-tiny pt-5">
      <h1 className="text-main">
        Hello, UserDetails!
      </h1>
    </div>
  </div>
)

export default UserDetails
