import './Footer.css'
import logoGitHub from '../../assets/github.svg'
import logoYoutube from '../../assets/logoYoutube.svg'
import logoInstagram from '../../assets/logoInstagram.svg'
import logoFacebook from '../../assets/logoFacebook.svg'

function FooterComponent () {
  return (
    <div className='info-dev'>
      <h1>Comunidad</h1>
      <p>Unete a nuestra comunidad romántica. ¡Todos son bienvenidos!</p>

      <div className='social-icons'>
        <a href='https://facebook.com/'>
          <img src={logoFacebook} alt='logo de facebook' />
        </a>
        <a href='https://instagram.com/'>
          <img src={logoInstagram} alt='logo de instagram' />
        </a>
        <a href='https://youtube.com/'>
          <img src={logoYoutube} alt='logo de youtube' />
        </a>
      </div>

      <div className='info-github'>
        <p>Made with ❤️ | Juan Jiménez</p>
        <a href='https://github.com/Jzea94'>
          <img src={logoGitHub} alt='logo-github' />
        </a>
      </div>
    </div>
  )
}

export default FooterComponent
