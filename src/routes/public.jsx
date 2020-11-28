import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import SignUp from '../components/SignUp'
import LogIn from '../components/LogIn'

const PublicRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LogIn} />
      <Route path="/cadastro" component={SignUp} />

      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
)

export default PublicRoutes
