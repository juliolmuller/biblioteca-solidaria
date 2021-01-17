import Header from '../../components/TheHeader'
import Banner from './Banner'
import SearchBar from './SearchBar'
import './styles.scss'

const Home = () => {
  return (
    <div id="home">
      <Header />
      <div className="container p-0">
        <Banner />
        <SearchBar />
      </div>
    </div>
  )
}

export default Home
