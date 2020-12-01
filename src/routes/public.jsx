import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import SignUp from '../pages/SignUp'
import LogIn from '../pages/LogIn'

const PublicRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LogIn} />
      <Route path="/cadastrar" component={SignUp} />

      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
)

export default PublicRoutes
