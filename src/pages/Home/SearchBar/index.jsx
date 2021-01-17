import './styles.scss'

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-input">
        <i className="fas fa-search"></i>
        <input
          type="search"
          className="form-control"
          placeholder="Pesquisar por título, autor, editora..."
          aria-label="Search"
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
        >
          <option value="title-asc">Título</option>
          <option value="author-asc">Autor(es)</option>
          <option value="year-asc">Ano (crescente)</option>
          <option value="year-desc">Ano (decrescente)</option>
        </select>
      </div>
    </div>
  )
}

export default SearchBar
