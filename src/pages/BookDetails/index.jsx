import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/TheHeader'
import HorizontalLine from '../../components/HorizontalLine'
import { useBooksApi } from '../../hooks'
import loadingSpinner from '../../images/loading-spinner.svg'
import './styles.scss'

const BookDetails = () => {
  const bookId = useParams().id
  const [book, setBook] = useState(null)
  const { isLoading, findBookById } = useBooksApi()

  useEffect(() => {
    findBookById(Number(bookId)).then(setBook)
  }, [bookId])

  return (
    <div id="book-details">
      <Header searchControls />

      <div className="container">
        <HorizontalLine />

        {(!book || isLoading) ? (
          <div className="book-details-loading">
            <img src={loadingSpinner} alt="Carregando" />
          </div>
        ) : (
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3">
              <img src={book.images[0]} className="book-cover" alt="Capa do livro" />
            </div>
            <div className="col-12 col-md-8 col-lg-9">
              <h2 className="book-title">{book.title}</h2>

              <div className="row">
                {Boolean(book.author) && <>
                  <div className="col-3 book-prop">Autor(es):</div>
                  <div className="col-9 book-prop-value">{book.author}</div>
                </>}
                {Boolean(book.publisher) && <>
                  <div className="col-3 book-prop">Editora:</div>
                  <div className="col-9 book-prop-value">{book.publisher}</div>
                </>}
                {Boolean(book.edition) && <>
                  <div className="col-3 book-prop">Edição:</div>
                  <div className="col-9 book-prop-value">{book.edition}</div>
                </>}
                {Boolean(book.year) && <>
                  <div className="col-3 book-prop">Ano de publicação:</div>
                  <div className="col-9 book-prop-value">{book.year}</div>
                </>}
                {Boolean(book.language) && <>
                  <div className="col-3 book-prop">Idioma:</div>
                  <div className="col-9 book-prop-value">{book.language}</div>
                </>}
                {Boolean(book.pages) && <>
                  <div className="col-3 book-prop">Número de páginas:</div>
                  <div className="col-9 book-prop-value">{book.pages}</div>
                </>}
                {Boolean(book.description) && <>
                  <div className="col-3 book-prop">Descrição:</div>
                  <div className="col-9 book-prop-value">{book.description}</div>
                </>}
                {Boolean(book.situation) && <>
                  <div className="col-3 book-prop">Estado de conservação:</div>
                  <div className="col-9 book-prop-value">{book.situation}</div>
                </>}
                {Boolean(book.testimony) && <>
                  <div className="col-3 book-prop">Depoimento do anunciante:</div>
                  <div className="col-9 book-prop-value">{book.testimony}</div>
                </>}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BookDetails
