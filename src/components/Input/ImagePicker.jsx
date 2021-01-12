import { useEffect, useRef } from 'react'
import avatarImg from '../../images/avatar.png'

const ImagePicker = ({ model: [value, setBase64], ...rest }) => {
  const id = Math.random()
  const fluidImage = useRef()

  const handleChange = (event) => {
    const [file] = event.target.files
    const fileReader = new FileReader()

    fileReader.onload = () => setBase64(fileReader.result)
    fileReader.readAsDataURL(file)
  }

  const handleError = (event) => {
    event.target.src = avatarImg
  }

  useEffect(() => {
    window.onresize = () => {
      fluidImage.current.style.height = `${fluidImage.current.clientWidth}px`
    }
    window.onresize()
  }, [])

  return (
    <div className="image-picker row">
      <div className="preview col-4 col-md-5 col-lg-4">
        <img
          src={value}
          ref={fluidImage}
          className="img-fluida"
          onError={handleError}
          alt="foto do usuário"
        />
      </div>
      <div className="controls col-8 col-md-6 col-lg-8">
        <input
          id={id}
          type="file"
          onChange={handleChange}
          accept="image/jpeg,image/png"
          {...rest}
        />
        <label htmlFor={id} className="btn btn-secondary">
          Buscar arquivo...
        </label>
        <span className="formats">
          Formatos permitidos:
          <br className="d-lg-none" />
          JPEG ou PNG (máx. 2MB)
        </span>
      </div>
    </div>
  )
}

export default ImagePicker
