import { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import Header from '../../components/TheHeader'
import HorizontalLine from '../../components/HorizontalLine'
import Input from '../../components/Input'
import { useAuth, useBooksApi } from '../../hooks'
import * as masks from '../../utils/input-masks'
import loadingSpinner from '../../images/loading-spinner.svg'
import './styles.scss'

const BookForm = () => {
  const router = useHistory()
  const { userData } = useAuth()
  const bookId = Number(useParams().id)
  const [year, setYear] = useState('')
  const [title, setTitle] = useState('')
  const [pages, setPages] = useState('')
  const [image, setImage] = useState('')
  const [author, setAuthor] = useState('')
  const [edition, setEdition] = useState('')
  const [language, setLanguage] = useState('')
  const [publisher, setPublisher] = useState('')
  const [situation, setSituation] = useState('')
  const [testimony, setTestimony] = useState('')
  const [description, setDescription] = useState('')
  const { isLoading, findBookById, createNewBook, updateBook } = useBooksApi()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const book = {
      id: bookId,
      owner: userData.id,
      images: [image],
      description,
      testimony,
      situation,
      publisher,
      language,
      edition,
      author,
      pages,
      title,
      year,
    }

    try {
      const { id } = bookId
        ? await updateBook(book)
        : await createNewBook(book)

      router.replace(`/livro/${id}`)
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    bookId && findBookById(bookId).then((book) => {
      setDescription(book.description)
      setTestimony(book.testimony)
      setSituation(book.situation)
      setPublisher(book.publisher)
      setLanguage(book.language)
      setEdition(book.edition || '')
      setAuthor(book.author)
      setImage(book.images[0])
      setPages(book.pages)
      setTitle(book.title)
      setYear(book.year)
    })
  }, [bookId])

  return (
    <div id="book-form">
      <Header searchControls />

      <div className="container">
        <HorizontalLine />

        {(bookId && isLoading) ? (
          <div className="book-details-loading">
            <img src={loadingSpinner} alt="Carregando" />
          </div>
        ) : (
          <>
            <h1 className="page-title">
              {bookId
                ? `Editando livro #${bookId}`
                : 'Cadastro de Novo Livro'
              }
            </h1>

            <form onSubmit={handleSubmit}>
              <Input
                label="Título da obra:"
                model={[title, setTitle]}
                maxLength="80"
                required
                autoFocus
              />
              <Input
                label="Autor(es):"
                model={[author, setAuthor]}
                maxLength="50"
                required
              />
              <Input
                label="Editora:"
                model={[publisher, setPublisher]}
              />
              <Input
                label="Edição:"
                model={[edition, setEdition]}
              />
              <Input
                label="Ano de publicação:"
                model={[year, setYear]}
                mask={masks.number(4)}
                required
              />
              <Input
                label="Idioma:"
                model={[language, setLanguage]}
                required
              />
              <Input
                label="Número de páginas:"
                model={[pages, setPages]}
                mask={masks.number(6)}
                required
              />
              <Input
                type="multiline"
                label="Breve descrição:"
                model={[description, setDescription]}
                required
              />
              <Input
                type="image"
                label="Capa do livro:"
                model={[image, setImage]}
                required={!image}
              />
              <Input
                label="Estado de conservação:"
                placeholder="por examplo: 'Novo', 'Manchado', 'Páginas faltando'..."
                model={[situation, setSituation]}
                required
              />
              <Input
                type="multiline"
                label="Breve depoimento pessoal da sua experiência com a obra:"
                model={[testimony, setTestimony]}
              />

              <div className="action-buttons">
                <button
                  type="submit"
                  className="btn btn-lg btn-secondary"
                  disabled={isLoading}
                >Enviar dados</button>

                <Link
                  to="/"
                  className="btn btn-lg btn-link"
                  disabled={isLoading}
                >Cancelar e retornar à página inicial</Link>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default BookForm
