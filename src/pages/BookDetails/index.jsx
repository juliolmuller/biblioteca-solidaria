import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../../components/TheHeader'
import HorizontalLine from '../../components/HorizontalLine'
import DetailItem from '../../components/DetailItem'
import ContactBox from './ContactBox'
import { useAuth, useBooksApi } from '../../hooks'
import loadingSpinner from '../../images/loading-spinner.svg'
import './styles.scss'

const BookDetails = () => {
  const bookId = useParams().id
  const [book, setBook] = useState(null)
  const { isLoading, findBookById } = useBooksApi()
  const { userData } = useAuth()
  const belongsToUser = (userData.id === book?.owner?.id)

  useEffect(() => {
    findBookById(Number(bookId)).then(setBook)
  }, [bookId])

  return (
    <div id="book-details">
      <Header searchControls />

      <div className="container">
        <HorizontalLine goBackButton />

        {(!book || isLoading) ? (
          <div className="book-details-loading">
            <img src={loadingSpinner} alt="Carregando" />
          </div>
        ) : (
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3">
              <img src={book.images[0]} className="book-cover" alt="Capa do livro" />
            </div>
            <div className="col-12 col-md-8 col-lg-9 d-relative">
              <header className="d-flex">
                <h2 className="book-title">{book.title}</h2>
                {belongsToUser && (
                  <Link to={`/livro/editar/${book.id}`} className="btn btn-sm btn-outline-secondary">
                    <i className="fas fa-edit"></i>
                    Editar
                  </Link>
                )}
              </header>

              {belongsToUser || (
                <ContactBox owner={book.owner} />
              )}

              <section className="row">
                {Boolean(book.author) && (
                  <DetailItem title="Autor(es):">
                    {book.author}
                  </DetailItem>
                )}

                {Boolean(book.publisher) && (
                  <DetailItem title="Editora:">
                    {book.publisher}
                  </DetailItem>
                )}

                {Boolean(book.edition) && (
                  <DetailItem title="Edição:">
                    {book.edition}
                  </DetailItem>
                )}

                {Boolean(book.year) && (
                  <DetailItem title="Ano de publicação:">
                    {book.year}
                  </DetailItem>
                )}

                {Boolean(book.language) && (
                  <DetailItem title="Idioma:">
                    {book.language}
                  </DetailItem>
                )}

                {Boolean(book.pages) && (
                  <DetailItem title="Número de páginas:">
                    {book.pages}
                  </DetailItem>
                )}

                {Boolean(book.description) && (
                  <DetailItem title="Descrição:">
                    {book.description}
                  </DetailItem>
                )}

                {Boolean(book.situation) && (
                  <DetailItem title="Estado de conservação:">
                    {book.situation}
                  </DetailItem>
                )}

                {Boolean(book.testimony) && (
                  <DetailItem title="Depoimento do anunciante:">
                    {book.testimony}
                  </DetailItem>
                )}
              </section>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BookDetails
