import { useEffect } from 'react'
import './styles.scss'

const FILTER_OPTIONS = [
  { label: 'Título (de A a Z)', value: 'title,asc' },
  { label: 'Título (de Z a A)', value: 'title,desc' },
  { label: 'Autor(es) (de A a Z)', value: 'author,asc' },
  { label: 'Autor(es) (de Z a A)', value: 'author,desc' },
  { label: 'Ano (crescente)', value: 'year,asc' },
  { label: 'Ano (decrescente)', value: 'year,desc' },
]

const SearchBar = ({
  filterModel: [filter, setFilter],
  sortModel: [sort, setSort],
}) => {
  useEffect(() => {
    setSort(FILTER_OPTIONS[0].value)
  }, [setSort])

  return (
    <div className="search-bar">
      <div className="search-input">
        <i className="fas fa-search"></i>
        <input
          type="search"
          className="form-control"
          placeholder="Pesquisar por título, autor, editora..."
          aria-label="Search"
          value={filter}
          onInput={(event) => setFilter(event.target.value)}
        />
      </div>

      <div className="search-order">
        <label htmlFor="order-options">
          <i className="fas fa-sort-alpha-down pr-2"></i>
          <span>Ordenar por:</span>
        </label>
        <select
          id="order-options"
          className="form-control"
          value={sort}
          onInput={(event) => setSort(event.target.value)}
        >
          {FILTER_OPTIONS.map(({ label, value }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default SearchBar
