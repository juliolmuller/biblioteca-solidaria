import { Link } from 'react-router-dom'
import './styles.scss'

const BookTile = ({ book, onDelete }) => {
  return (
    <div className="book-tile">
      <div className="book-cover">
        <img src={book.images[0]} alt="capa do livro" />
      </div>

      <div className="book-info">
        <div className="book-title">{book.title}</div>
        <div className="book-actions">
          <Link to={`/livro/${book.id}`} className="btn btn-light" title="Visualizar">
            <i className="fas fa-arrow-circle-right"></i>
          </Link>
          <Link to={`/livro/editar/${book.id}`} className="btn btn-light" title="Editar">
            <i className="fas fa-edit"></i>
          </Link>
          <button type="button" onClick={onDelete} className="btn btn-light" title="Excluir">
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookTile
