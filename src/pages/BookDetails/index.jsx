import './styles.css'
import Header from '../../components/TheHeader'

const BookDetails = () => (
  <div id="book-details">
    <Header searchControls />
    <div className="container-tiny pt-5">
      <h1 className="text-main">
        Hello, BookDetails!
      </h1>
    </div>
  </div>
)

export default BookDetails
