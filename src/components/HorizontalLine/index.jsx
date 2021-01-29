import { useHistory } from 'react-router-dom'
import './styles.scss'

const HorizontalLine = ({ goBackButton }) => {
  const router = useHistory()

  return (
    <div className="horizontal-line-wrapper">
      {goBackButton && (
        <button
          type="button"
          className="btn btn-sm btn-link"
          onClick={() => router.goBack()}
        >
          <i className="fas fa-caret-left"></i>
          Voltar
        </button>
      )}
      <div className="horizontal-line"></div>
    </div>
  )
}

export default HorizontalLine
