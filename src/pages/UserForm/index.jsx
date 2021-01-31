import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/TheHeader'
import HorizontalLine from '../../components/HorizontalLine'
import Input from '../../components/Input'
import { useAuth, useUsersApi } from '../../hooks'
import * as masks from '../../utils/input-masks'
import './styles.scss'

const UserForm = () => {
  const router = useHistory()
  const { userData, login } = useAuth()
  const { isLoading, updateUser } = useUsersApi()
  const [email, setEmail] = useState(userData.emails[0])
  const [avatar, setAvatar] = useState(userData.avatar)
  const [lastName, setLastName] = useState(userData.lastName)
  const [firstName, setFirstName] = useState(userData.firstName)
  const [dateOfBirth, setDateOfBirth] = useState(userData.dateOfBirth)
  const [phoneNumber, setPhoneNumber] = useState(userData.phoneNumber)
  const [isTelegram, setIsTelegram] = useState(userData.isTelegram)
  const [isWhatsApp, setIsWhatsApp] = useState(userData.isWhatsApp)
  const [registration] = useState(userData.registration)

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await updateUser({
        id: userData.id,
        emails: [email],
        registration,
        dateOfBirth,
        phoneNumber,
        isTelegram,
        isWhatsApp,
        firstName,
        lastName,
        avatar,
      })
      login(registration, userData.password)
      router.replace('/usuario')
    } catch (error) {
      throw error
    }
  }

  return (
    <div id="user-form">
      <Header searchControls />

      <div className="container">
        <HorizontalLine goBackButton />

        <h1 className="page-title">
          Atualizando Dados de {userData.firstName}
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
              required={!avatar}
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
              label=" "
              type="checkbox"
              checkboxLabel="Este número de telefone também é Telegram"
              model={[isTelegram, setIsTelegram]}
            />
            <Input
              label=" "
              type="checkbox"
              checkboxLabel="Este número de telefone também é WhatsApp"
              model={[isWhatsApp, setIsWhatsApp]}
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
              model={[registration]}
              mask={masks.grr}
              readOnly
            />

            <div className="action-buttons">
              <button
                type="submit"
                className="btn btn-lg btn-secondary"
                disabled={isLoading}
              >
                <i className="fas fa-save mr-2"></i>
                Salvar Alterações
              </button>

              <button
                type="button"
                className="btn btn-lg btn-link"
                onClick={() => router.goBack()}
                disabled={isLoading}
              >Cancelar e retornar à página anterior</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default UserForm
