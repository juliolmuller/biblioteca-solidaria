import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/TheHeader'
import HorizontalLine from '../../components/HorizontalLine'
import BookTile from './BookTile'
import { useAuth, useBooksApi } from '../../hooks'
import loadingSpinner from '../../images/loading-spinner.svg'
import './styles.scss'

const UserDetails = () => {
  const { userData } = useAuth()
  const [books, setBooks] = useState([])
  const { isLoading, getBooks, deleteBook } = useBooksApi()

  const handleDelete = (book) => {
    if (confirm(`Tem certeza de que quer excluir o livro "${book.title}"?`)) {
      const newBooks = books.filter((b) => b !== book)

      setBooks(newBooks)
      deleteBook(book.id)
    }
  }

  useEffect(() => {
    getBooks({ owner: Number(userData.id) }).then(setBooks)
  }, [])

  return (
    <div id="user-details">
      <Header searchControls />
        <div className="container">
          <HorizontalLine />

          {(isLoading) ? (
            <div className="user-details-loading">
              <img src={loadingSpinner} alt="Carregando" />
            </div>
          ) : (
            <div className="row">
              <div className="col-12 col-md-4 col-lg-3">
                <img src={userData.avatar} className="user-avatar" alt="Foto do usuário" />
              </div>
              <div className="col-12 col-md-8 col-lg-9 d-relative">
                <header className="d-flex">
                  <h2 className="user-name">
                    {userData.firstName} {userData.lastName}
                  </h2>
                  <Link to={'/usuario/editar'} className="btn btn-outline-secondary">
                    <i className="fas fa-edit"></i>
                    Atualizar
                  </Link>
                </header>

                <section className="row">
                  {Boolean(userData.dateOfBirth) && <>
                    <div className="col-3 user-prop">Data de nascimento:</div>
                    <div className="col-9 user-prop-value">{userData.dateOfBirth}</div>
                  </>}
                  {Boolean(userData.registration) && <>
                    <div className="col-3 user-prop">Matrícula UFPR:</div>
                    <div className="col-9 user-prop-value">{userData.registration}</div>
                  </>}
                  {Boolean(userData.emails.length) && <>
                    <div className="col-3 user-prop">E-mails para contato:</div>
                    <div className="col-9 user-prop-value">
                      {userData.emails.map((email) => (
                        <div key={email}>{email}</div>
                      ))}
                    </div>
                  </>}
                  {Boolean(userData.phoneNumber) && <>
                    <div className="col-3 user-prop">Número de telefone:</div>
                    <div className="col-9 user-prop-value">
                      {userData.phoneNumber}
                      {userData.isTelegram && <i className="fab fa-telegram-plane pl-3"></i>}
                      {userData.isWhatsApp && <i className="fab fa-whatsapp pl-3"></i>}
                    </div>
                  </>}

                  <div className="col-3 user-prop">Livros anunciados:</div>
                  <div className="col-9 user-prop-value">
                    {books?.map((book) => (
                      <BookTile key={book.id} book={book} onDelete={() => handleDelete(book)} />
                    ))}

                    <Link
                      to="/livro/novo"
                      className="btn btn-outline-secondary"
                    >
                      <i className="fas fa-plus mr-2"></i>
                      Anunciar Livro
                    </Link>
                  </div>
                </section>
              </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default UserDetails
