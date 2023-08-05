import '../informationCardHome/index.css'

const card = [
  {
    id: 1,
    img: 'https://cdn-icons-png.flaticon.com/512/10453/10453018.png',
    title: 'UI/UX Design',
    subTitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi facere unde officia illo consequuntur porro illum aliquid numquam.'
  },
  {
    id: 2,
    img: 'https://www.aluracursos.com/assets/api/formacoes/512/front-end.png',
    title: 'Front End',
    subTitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi facere unde officia illo consequuntur porro illum aliquid numquam.'
  },
  {
    id: 3,
    img: 'https://cdn-icons-png.flaticon.com/512/9366/9366679.png',
    title: 'Back End',
    subTitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi facere unde officia illo consequuntur porro illum aliquid numquam.'
  }
]

export default function InformationCardHome() {
  return (
    <div>
      <div className='home-info-contain'>
        <p>Unhappy with your website?</p>
        <p className='home-info'>We create beautiful and fast web services</p>
      </div>
      <div className='home-image-contain'>
        <figure className='home-image'>
          <img src='https://www.martec.co.uk/wp-content/uploads/showroom-analytics-meeting.jpg' alt='photo'/>
        </figure>
      </div>
      <div className='home-send-info-contain'>
        <p className='home-send-info'>Story, emotion and purpose</p>
        <p>
          We help transform your ideas into real world applications that will outperform your toughest competition and help you achieve your strategic goals in short period of time.
        </p>
        <div className='home-input-container'>
          <p>Want us to contact you?</p>
          <div className='home-input'>
            <input type='email' placeholder='Email' />
            <button className='home-button'>Join</button>
          </div>
        </div>
      </div>
      <div className='home-card-contain'>
        <p>We offer high demand services</p>
        <div className='home-card-flex'>
          {card.map((item) => (
            <div className='home-card' key={item.id}>
              <figure
                className={
                  item.id === 2 ? 'card-image-front' : 'card-image-edit'
                  && item.id === 3 ? 'card-image-back' : 'card-image-edit'
                }
              >
                <img src={item.img} alt='' />
              </figure>
              <p>{item.title}</p>
              <p className='card-subtitle'>{item.subTitle}</p>
              <button className='card-button'>Get started</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
