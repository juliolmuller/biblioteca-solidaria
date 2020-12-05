import './styles.css'

const SearchInput = ({ searchText, label, onSubmit, ...rest }) => {
  const fieldId = parseInt(Math.random() * 1000, 10)

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit && onSubmit(event.target.value)
  }

  return (
    <div className="search-input">
      <form onSubmit={handleSubmit}>
        {label && (
          <label htmlFor={fieldId}>{label}</label>
        )}
        <div className="input-group">
          <input
            type="search"
            id={fieldId}
            className="form-control"
            value={searchText}
            { ...rest }
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <i className="fas fa-search"></i>
            </span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchInput
