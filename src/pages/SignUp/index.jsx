import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/TheHeader'
import HorizontalLine from '../../components/HorizontalLine'
import Input from '../../components/Input'
import { useAuth, useUsersApi } from '../../hooks'
import * as masks from '../../utils/input-masks'
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
  const { isLoading: isAuthenticating, login } = useAuth()
  const { isLoading, createNewUser } = useUsersApi()

  const handleSubmit = (event) => {
    event.preventDefault()
    createNewUser({
      passwordConfirmation,
      registration,
      dateOfBirth,
      phoneNumber,
      termsAgreed,
      firstName,
      lastName,
      password,
      avatar,
      email,
    }).then(() => login(registration, password))
  }

  return (
    <div id="signup">
      <Header />

      <div className="container-tiny">
        <HorizontalLine />

        <h1 className="page-title">
          Cadastro de Novo Usuário
        </h1>

        <form onSubmit={handleSubmit}>
          <Input
            label="Primeiro nome:"
            model={[firstName, setFirstName]}
            mask={masks.name}
            required
            autoFocus
          />
          <Input
            label="Sobrenome:"
            model={[lastName, setLastName]}
            mask={masks.name}
            required
          />
          <Input
            type="avatar"
            label="Foto do usuário:"
            model={[avatar, setAvatar]}
            required
          />
          <Input
            label="Data de nascimento:"
            placeholder="dd/mm/aaaa"
            model={[dateOfBirth, setDateOfBirth]}
            mask={masks.date}
            required
          />
          <Input
            type="tel"
            label="Telefone de contato:"
            placeholder="(00) 0000-0000"
            model={[phoneNumber, setPhoneNumber]}
            mask={masks.phone}
          />
          <Input
            type="email"
            label="Email da UFPR:"
            placeholder="exemplo@email.com"
            model={[email, setEmail]}
            required
          />
          <Input
            label="Matrícula (GRR ou outro):"
            placeholder="GRR00000000"
            model={[registration, setRegistration]}
            mask={masks.grr}
            required
          />
          <Input
            type="password"
            label="Senha de acesso:"
            placeholder="* * * * *"
            model={[password, setPassword]}
            required
          />
          <Input
            type="password"
            label="Repetir senha:"
            placeholder="* * * * *"
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
              disabled={isAuthenticating || isLoading}
            >Enviar dados</button>

            <Link
              to="/"
              className="btn btn-lg btn-link"
              disabled={isLoading}
            >Cancelar e retornar à página anterior</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
