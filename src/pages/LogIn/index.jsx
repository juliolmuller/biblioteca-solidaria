import { Link } from 'react-router-dom'
import verticalImg from '../../images/login-cover-v.jpg'
import horizontalImg from '../../images/login-cover-h.jpg'
import './styles.css'
import LogInForm from './LogInForm'

const LogIn = () => (
  <div id="login" className="bg-main">
    <div className="container-tiny">
      <h1 id="app-title">
        Biblioteca Solidária
      </h1>
      <div className="card">
        <div className="row no-gutters">
          <div className="col-md-5">
            <img src={horizontalImg} className="card-img img-h" alt="Capa da aplicação" />
            <img src={verticalImg} className="card-img img-v" alt="Capa da aplicação" />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h2 className="card-title h4">
                Seja muito bem-vind@
              </h2>
              <p className="card-text">
                Este é o portal oficial da Universidade Federal do Paraná para compartilhar suas
                experiências literárias, especialmente com aqueles que precisam. Aqui você poderá
                doar obras que não estão mais em uso ou combinar trocas com outros membros da
                comunidade UFPR.
              </p>
              <LogInForm />
            </div>
            <div className="card-footer">
              <small className="d-block">
                <a href="#">Esqueceu sua senha?</a>
              </small>
              <small>
                Novo na plataforma?
                <Link to="/cadastrar">Cadastre-se aqui</Link>
              </small>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-whitish">
        UFPR &copy; Todos os Direitos Reservados
      </footer>
    </div>
  </div>
)

export default LogIn
