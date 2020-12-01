import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import BookForm from '../pages/BookForm'
import BookDetails from '../pages/BookDetails'
import UserForm from '../pages/UserForm'
import UserDetails from '../pages/BookDetails'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/livro/:id" component={BookForm} />
      <Route path="/livro/novo" component={BookDetails} />
      <Route path="/livro/editar/:id" component={BookForm} />
      <Route path="/usuario" component={UserDetails} />
      <Route path="/usuario/editar" component={UserForm} />

      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
)

export default Routes
