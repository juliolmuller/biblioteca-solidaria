import { useState } from 'react'
import Header from '../../components/TheHeader'
import Banner from './Banner'
import SearchBar from './SearchBar'
import Bookshelf from './Bookshelf'
import './styles.scss'

const Home = () => {
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState('')

  return (
    <div id="home">
      <Header />
      <div className="container p-0">
        <Banner />
        <SearchBar
          filterModel={[filter, setFilter]}
          sortModel={[sort, setSort]}
        />
        <Bookshelf
          filter={filter}
          sort={sort}
        />
      </div>
    </div>
  )
}

export default Home
