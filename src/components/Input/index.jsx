import ImagePicker from './ImagePicker'
import './styles.scss'

const Input = ({
  model: [value, setter],
  id = Math.random(),
  required = false,
  type = 'text',
  checkboxLabel,
  label,
  ...rest
}) => {
  const wrapperClass = `
    input col-12 col-md-8 custom-control
    ${type === 'checkbox' ? 'custom-checkbox' : ''}
  `
  const className = type === 'checkbox'
    ? 'custom-control-input'
    : 'form-control'
  const attrs = {
    id, type, required, value, className, // eslint-disable-line object-property-newline
    onChange: (e) => setter(e.target.value),
    ...rest,
  }

  return (
    <div className="input-component row form-group">
      <div className="label col-12 col-md-4">
        {label && <>
          <label htmlFor={id}>{label}</label>
          {required && <small>campo obrigatório</small>}
        </>}
      </div>

      <div className={wrapperClass}>
        {type === 'avatar' ? (
          <ImagePicker
            model={[value, setter]}
            required={required}
          />
        ) : (
          <>
            <input {...attrs} />
            {type === 'checkbox' && checkboxLabel && (
              <label htmlFor={id} className="custom-control-label">
                {checkboxLabel}
              </label>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Input
