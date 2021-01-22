import { useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import Header from '../../components/TheHeader'
import HorizontalLine from '../../components/HorizontalLine'
import Input from '../../components/Input'
import { useBooksApi } from '../../hooks'
import * as masks from '../../utils/input-masks'
import './styles.scss'

const BookForm = () => {
  const router = useHistory()
  const bookId = useParams().id
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
  const { isLoading, createNewBook } = useBooksApi()

  const handleSubmit = (event) => {
    event.preventDefault()
    createNewBook({
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
    }).then(({ id }) => router.replace(`/livro/${id}`))
  }

  return (
    <div id="book-form">
      <Header searchControls />

      <div className="container">
        <HorizontalLine />

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
            required
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
      </div>
    </div>
  )
}

export default BookForm
