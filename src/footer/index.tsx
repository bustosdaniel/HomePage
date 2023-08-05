import '../footer/index.css'

export default function Footer() {
  return (
    <div className='footer-contain'>
      <div className='footer-flex'>
        <ul className='footer-list'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>Services</a>  
          </li>
          <li>
            <a href='/'>Our Works</a>
          </li>
          <li>
            <a href='/'>Clients</a>
          </li>
          <li>
            <a href='/'>Contact</a>
          </li>
        </ul>
        <div className='footer-images-contain'>
          <p>Edie</p>
          <div className='footer-images'>
            <figure>
              <a href='https://www.instagram.com/neiifer_/'>
                <img src='https://cdn-icons-png.flaticon.com/512/733/733558.png' alt='insta'/>
              </a>
            </figure>
            <figure className='footer-in'>
              <a href='https://www.linkedin.com/in/daniel-bustos-21961624a/'>
                <img
                  src='https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png'
                  alt='linkedin'
                />
              </a>
            </figure>
            <figure>
              <a href='https://www.linkedin.com/in/daniel-bustos-21961624a/'>
                <img src='https://cdn-icons-png.flaticon.com/512/3536/3536424.png' alt='twitter'/>
              </a>
            </figure>
          </div>
        </div>
        <div className='home-input-container'>
          <p>Want us to contact you?</p>
          <div className='home-input'>
            <input type='email' placeholder='Email' />
            <button className='home-button'>Join</button>
          </div>
        </div>
      </div>
      <p className='footer-by'>created by <a href='https://github.com/bustosdaniel'>Neifer Bustos</a> - devChallenges.io</p>
    </div>
  )
}
