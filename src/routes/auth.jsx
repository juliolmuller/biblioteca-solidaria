import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import BookDetails from '../pages/BookDetails'
import BookForm from '../pages/BookForm'
import UserDetails from '../pages/UserDetails'
import UserForm from '../pages/UserForm'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/livro/novo" component={BookForm} />
      <Route path="/livro/editar/:id" component={BookForm} />
      <Route path="/livro/:id" component={BookDetails} />
      <Route path="/usuario" exact component={UserDetails} />
      <Route path="/usuario/editar" component={UserForm} />

      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
)

export default Routes
