import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/TheHeader'
import HorizontalLine from '../../components/HorizontalLine'
import Input from '../../components/Input'
import './styles.scss'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [avatar, setAvatar] = useState('')
  const [password, setPassword] = useState('')
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [registration, setRegistration] = useState('')
  const [termsAgreed, setTermsAgreed] = useState(false)
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log({
      firstName,
      lastName,
      dateOfBirth,
      phoneNumber,
      email,
      registration,
      password,
      passwordConfirmation,
      termsAgreed,
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
            label="Primeiro nome:"
            model={[firstName, setFirstName]}
            required
          />
          <Input
            label="Sobrenome:"
            model={[lastName, setLastName]}
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
            model={[registration, setRegistration]}
            required
          />
          <Input
            type="password"
            label="Senha de acesso:"
            model={[password, setPassword]}
            required
          />
          <Input
            type="password"
            label="Repetir senha:"
            model={[passwordConfirmation, setPasswordConfirmation]}
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
