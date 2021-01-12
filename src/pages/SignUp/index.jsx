import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/TheHeader'
import HorizontalLine from '../../components/HorizontalLine'
import Input from '../../components/Input'
import './styles.scss'

const SignUp = () => {
  const [grr, setGrr] = useState('')
  const [email, setEmail] = useState('')
  const [avatar, setAvatar] = useState('')
  const [fullName, setFullName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [termsAgreed, setTermsAgreed] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log({
      fullName, dateOfBirth, phoneNumber, email, grr, termsAgreed,
    })
  }

  return (
    <div id="signup">
      <Header />
      <div className="container-tiny">
        <HorizontalLine />

        <h1 className="header">
          Cadastro de Novo Usuário
        </h1>

        <form onSubmit={handleSubmit}>
          <Input
            type="avatar"
            label="Foto do usuário:"
            model={[avatar, setAvatar]}
            required
          />
          <Input
            label="Nome completo:"
            model={[fullName, setFullName]}
            required
          />
          <Input
            type="date"
            label="Data de nascimento:"
            model={[dateOfBirth, setDateOfBirth]}
            required
          />
          <Input
            type="tel"
            label="Telefone de contato:"
            model={[phoneNumber, setPhoneNumber]}
          />
          <Input
            type="email"
            label="Email da UFPR:"
            model={[email, setEmail]}
            required
          />
          <Input
            label="Matrícula (GRR ou outro):"
            model={[grr, setGrr]}
            required
          />
          <Input
            type="checkbox"
            label="Matrícula (GRR ou outro):"
            checkboxLabel="Eu li e estou de acordo com os termos de serviço da Biblioteca Solidária"
            model={[termsAgreed, setTermsAgreed]}
            required
          />

          <div className="action-buttons">
            <button
              type="submit"
              className="btn btn-lg btn-secondary"
            >Enviar dados</button>

            <Link
              to="/"
              className="btn btn-lg btn-link"
            >Cancelar e retornar à página anterior</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
