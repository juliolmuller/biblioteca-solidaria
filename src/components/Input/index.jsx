import { useEffect, useRef } from 'react'
import $ from 'jquery'
import ImagePicker from './ImagePicker'
import './styles.scss'

const Input = ({
  model: [value, setter],
  id = Math.random(),
  required = false,
  readOnly = false,
  multiple = false,
  type = 'text',
  checkboxLabel,
  label,
  mask,
  ...rest
}) => {
  const thisInput = useRef()
  const className = readOnly // eslint-disable-line no-nested-ternary
    ? 'form-control-plaintext border-0'
    : (type === 'checkbox'
      ? 'custom-control-input'
      : 'form-control')
  const wrapperClass = `
    input col-12 col-md-8 custom-control
    ${type === 'checkbox' ? 'custom-checkbox' : ''}
  `
  const attrs = {
    ref: thisInput,
    id, type, required, readOnly, value, className, // eslint-disable-line object-property-newline
    onChange: (e) => setter(e.target.value),
    checked: (type === 'checkbox' && value),
    ...rest,
  }

  useEffect(() => { // eslint-disable-line consistent-return
    if (mask && thisInput.current) {
      const { template, ...options } = mask
      const onUnmounted = (node) => () => {
        $(node).unmask()
      }

      $(thisInput.current).mask(template, options)

      return onUnmounted(thisInput.current)
    }
  }, [mask])

  return (
    <div className="input-component row form-group">
      <div className="label col-12 col-md-4">
        {label && <>
          <label htmlFor={id}>{label}</label>
          {required && <small>campo obrigatório</small>}
        </>}
      </div>

      <div className={wrapperClass}>
        {/avatar|image/.test(type) && (
          <ImagePicker
            type={type}
            model={[value, setter]}
            required={required}
            multiple={multiple}
          />
        )}

        {type === 'multiline' && (
          <textarea {...attrs} rows="3" />
        )}

        {!/avatar|image/.test(type) && type !== 'multiline' && (
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
