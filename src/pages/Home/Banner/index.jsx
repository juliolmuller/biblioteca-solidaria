import banner from '../../../images/banner.svg'
import './styles.scss'

const Banner = () => (
  <div id="banner" role="banner">
    <div className="jumbotron">
      <p className="slogan">
        <span className="small">Compartilhe</span>
        <span className="medium">experiências.</span>
      </p>
      <p className="slogan">
        <span className="small">Compartilhe</span>
        <span className="large">livros.</span>
      </p>

      <img src={banner} alt="Imagem de banner" />
    </div>
  </div>
)

export default Banner
