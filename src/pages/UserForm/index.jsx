import Header from '../../components/TheHeader'
import HorizontalLine from '../../components/HorizontalLine'
import './styles.scss'

const UserForm = () => (
  <div id="user-form">
    <Header searchControls />

    <div className="container">
      <HorizontalLine goBackButton />

      <h1 className="page-title">
        Hello, UserForm!
      </h1>
    </div>
  </div>
)

export default UserForm
