import '../aplicationHome/index.css'

const card = [
  {
    id: 1,
    img: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/fullstack_php_js.jpg',
    title: 'Full stack application',
    subTitle: 'Smart home dashboard'
  },
  {
    id: 2,
    img: 'https://i.pinimg.com/736x/e0/28/b3/e028b31e327d14ef18a57e02979436d3.jpg',
    title: 'UX/UI design',
    subTitle: 'Onboard application'
  },
  {
    id: 3,
    img: 'https://www.businessofapps.com/wp-content/uploads/2019/03/iStock-880805262-1.jpg',
    title: 'Mobile application',
    subTitle: 'Booking system'
  },
  {
    id: 4,
    img: 'https://miro.medium.com/v2/resize:fit:626/0*M3SGcDdpXw2F6ggE',
    title: 'Front End applicati on',
    subTitle: 'Juice product homepage'
  }
]

export default function AplicationHome() {
  return (
    <div className='app-home-contain'>
      <p>Good design means good business</p>
      <div className='app-home-flex'>
      {card.map((item) => (
        <div className='app-home-image' key={item.id}>
          <figure className='app-image'>
            <img src={item.img} alt='image'/>
          </figure>
          <p className='app-name'>{item.title}</p>
          <p>{item.subTitle}</p>
        </div>
      ))}
      </div>
      <div className='app-home-button'>
        <button className='app-button'>see more</button>
        <figure className='app-image-button'>
          <img src='https://cdn-icons-png.flaticon.com/512/786/786401.png' alt='flecha'/>
        </figure>
      </div>
    </div>
  )
}
