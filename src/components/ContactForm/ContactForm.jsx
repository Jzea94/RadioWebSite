import { useState } from 'react'
import './ContactForm.css'
import imgForm from '../../assets/imgContactForm.avif'

function ContactForm () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value // Usamos la sintaxis de propiedad computada de objetos
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Data:', formData)

    setFormData(() => {
      return {
        name: '',
        email: '',
        message: ''
      }
    })
    // Aquí puedes agregar la lógica para enviar el formulario a un servidor
  }

  return (
    <main className='main-section-contact'>
      <div className='section-contact'>
        <h2>Trabajemos juntos</h2>
        <p>Completa el formulario y nos pondremos en contacto contigo lo antes posible. ¡Esperamos colaborar contigo pronto!</p>
        <form className='contact-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Nombre:</label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Correo Electrónico:</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Mensaje:</label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type='submit'>Send message</button>
        </form>
      </div>
      <div className='img-form'>
        <img src={imgForm} alt='imagen del formulario' />
      </div>
    </main>
  )
}

export default ContactForm
