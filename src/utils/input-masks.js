/**
 * This utilities file contains the logics to mask inputs.
 * In this application, we are using the "jquery-mask-plugin" to
 * achieve that, so you can reference to its documentations to
 * define the masks here:
 *
 * https://igorescobar.github.io/jQuery-Mask-Plugin/docs.html
 */

export const name = {
  template: 'A'.repeat(50),
  translation: {
    A: { pattern: /\D/ },
  },
}

export const date = {
  template: '00/00/0000',
}

const phoneBehavior = (value) => {
  return value.replace(/\D/g, '').length === 11
    ? '(00) 00000-0000'
    : '(00) 0000-00009'
}
export const phone = {
  template: phoneBehavior,
  onKeyPress(value, _element, field, options) {
    field.mask(phoneBehavior(value), options)
  },
}

export const grr = {
  template: 'SSS00000000',
  onKeyPress(value, _element, field) {
    field.val(value.toUpperCase())
  },
}
