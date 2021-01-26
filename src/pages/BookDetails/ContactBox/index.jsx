import { useState } from 'react'
import './styles.scss'

const ContactBox = ({ owner }) => {
  const [contactVisible, setContactVisible] = useState(false)

  return (
    <section className="contact-box rounded">
      <div className="owner-name">
        <span className="key">Anunciante:</span>
        <span className="value">
          {owner.firstName} {owner.lastName}
        </span>
      </div>
      {contactVisible ? (
        <div className="contact-info">
          {Boolean(owner.phoneNumber) && (
            <div className="contacts-wrapper">
              <i className="fab fa-whatsapp"></i>
              {owner.phoneNumber}
            </div>
          )}
          {Boolean(owner.phoneNumber) && (
            <div className="contacts-wrapper">
              <i className="fas fa-envelope"></i>
              {owner.emails[0]}
            </div>
          )}
        </div>
      ) : (
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setContactVisible(true)}
        >
          <i className="fas fa-envelope"></i>
          Ver Contato
        </button>
      )}
    </section>
  )
}

export default ContactBox
