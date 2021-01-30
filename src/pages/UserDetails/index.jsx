import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/TheHeader'
import HorizontalLine from '../../components/HorizontalLine'
import DetailItem from '../../components/DetailItem'
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
                <header className="d-flex align-items-center">
                  <h2 className="user-name">
                    {userData.firstName} {userData.lastName}
                  </h2>
                  <Link to={'/usuario/editar'} className="btn btn-outline-secondary">
                    <i className="fas fa-edit"></i>
                    Atualizar
                  </Link>
                </header>

                <section className="row">
                  {Boolean(userData.dateOfBirth) && (
                    <DetailItem title="Data de nascimento:">
                      {userData.dateOfBirth}
                    </DetailItem>
                  )}

                  {Boolean(userData.registration) && (
                    <DetailItem title="Matrícula UFPR:">
                      {userData.registration}
                    </DetailItem>
                  )}

                  {Boolean(userData.emails.length) && (
                    <DetailItem title="E-mails para contato:">
                      {userData.emails.map((email) => (
                        <div key={email}>{email}</div>
                      ))}
                    </DetailItem>
                  )}

                  {Boolean(userData.phoneNumber) && (
                    <DetailItem title="Número de telefone:">
                      {userData.phoneNumber}
                      {userData.isTelegram && <i className="fab fa-telegram-plane pl-3"></i>}
                      {userData.isWhatsApp && <i className="fab fa-whatsapp pl-3"></i>}
                    </DetailItem>
                  )}

                  <DetailItem title="Livros anunciados:">
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
                  </DetailItem>
                </section>
              </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default UserDetails
