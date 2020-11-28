import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
import BookForm from '../components/BookForm'
import BookDetails from '../components/BookDetails'
import UserForm from '../components/UserForm'
import UserDetails from '../components/BookDetails'

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
