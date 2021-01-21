import imageToBase64 from '../../utils/image-to-base64'
import avatarPlaceholder from '../../images/avatar.png'
import imagePlaceholder from '../../images/image.png'

const ImagePicker = ({
  model: [value, setBase64],
  required,
  multiple,
  type,
  ...rest
}) => {
  const id = Math.random()

  const handleChange = async (event) => {
    const [file] = event.target.files
    const base64 = await imageToBase64(file)

    setBase64(base64)
  }

  const handleError = (event) => {
    event.target.src = type === 'avatar'
      ? avatarPlaceholder
      : imagePlaceholder
  }

  return (
    <div className="image-picker row">
      <div className="preview">
        <img
          src={value}
          className={`${type} rounded`}
          onError={handleError}
          alt="foto do usuário"
        />
      </div>
      <div className="controls ">
        <input
          id={id}
          type="file"
          onChange={handleChange}
          accept="image/jpeg,image/png"
          multiple={multiple}
          required={required}
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
