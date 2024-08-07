import './Card.css'
// import imgProfile1 from '../../../public/Ben Stiller.jpg'
// import imgProfile2 from '../../../public/Al Pacino.jpg'
import imgProfile3 from '../../../public/Patrick Stewart.jpg'
import logoYoutube from '../../assets/logoYoutube.svg'
import logoInstagram from '../../assets/logoInstagram.svg'
import logoFacebook from '../../assets/logoFacebook.svg'

function Card () {
  return (
    <>
      <div className='card'>
        <div className='social-information'>
          <div className='title'>
            <h4>Ben Stiller</h4>
          </div>
          <div className='icons'>
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
        </div>
        <div className='img-background'>
          <img src={imgProfile3} alt='Foto de los locutores' />
        </div>

      </div>

    </>
  )
}

export default Card
