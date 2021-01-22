import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useBooksApi } from '../../../hooks'
import truncate from '../../../utils/truncate'
import loadingSpinner from '../../../images/loading-spinner.svg'
import './styles.scss'

const Bookshelf = ({ filter, sort }) => {
  const { isLoading, getBooks } = useBooksApi()
  const [books, setBooks] = useState([])

  const handleFiltering = (book) => {
    const regexp = new RegExp(filter, 'i')
    const matchTitle = regexp.test(book.title)
    const matchAuthor = regexp.test(book.author)
    const matchPublisher = regexp.test(book.publisher)
    const matchDescription = regexp.test(book.description)

    return !filter || matchTitle || matchAuthor || matchPublisher || matchDescription
  }

  const handleSorting = (book1, book2) => {
    const [prop, order] = sort.split(',')
    const orderFactor = order === 'desc' ? 1 : -1
    const value1 = String(book1[prop]).toLowerCase()
    const value2 = String(book2[prop]).toLowerCase()

    if (value1 < value2) {
      return 1 * orderFactor
    }
    if (value1 > value2) {
      return -1 * orderFactor
    }

    return 0
  }

  useEffect(() => {
    getBooks().then(setBooks)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (isLoading) {
    return (
      <div className="bookshelf-loading">
        <img src={loadingSpinner} alt="Carregando" />
      </div>
    )
  }

  return (
    <div className="bookshelf">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {books
          .filter(handleFiltering)
          .sort(handleSorting)
          .map((book) => (
            <div key={book.id} className="col">
              <Link to={`/livro/${book.id}`} key={book.id} className="card h-100">
                <div className="row no-gutters">
                  <div className="col-5">
                    <img src={book.images[0]} className="card-img" alt="Capa do livro" />
                  </div>
                  <div className="col-7">
                    <div className="card-body">
                      <h4 className="card-title" title={book.title}>
                        {truncate(book.title)}
                      </h4>
                      <div className="text-dark">
                        <p className="card-text">{book.author}</p>
                        <p className="card-text">{book.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Bookshelf
