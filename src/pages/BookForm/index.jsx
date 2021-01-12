import Header from '../../components/TheHeader'
import './styles.scss'

const BookForm = () => (
  <div id="book-form">
    <Header searchControls />
    <div className="container-tiny pt-5">
      <h1 className="text-main">
        Hello, BookForm!
      </h1>
    </div>
  </div>
)

export default BookForm
