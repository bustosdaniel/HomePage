import '../teamHome/index.css'

export default function TeamHome() {
  return (
    <div className='team-home-contain'>
      <div className='team-home-flex'>
        <div className='team-home-information'>
          <p>Meet the team</p>
          <p>We are chilled and a laidback team</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='team-home-image-contain'>
          <div className='team-home-image'>
            <figure className='team-image'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ2IQO1HmuxFQAtaHwTkh3sIVc8j1YXvRWLA&usqp=CAU' alt='niña'/>
            </figure>
          </div>
          <div className='team-home-photo'>
            <figure className='team-photo'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSazxKmrIwmDTx2C0Dk0-amj6Z2Qf_gHAtjCdZ467dhPafSqMNXsXNNwZlNvSjHAcaCduE&usqp=CAU' alt='niño'/>
            </figure>
            <figure className='team-picture'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWXw7IQHR7qXUzhA2ew9XdDQyxUAzZqnhYg&usqp=CAU' alt='niño'/>
            </figure>
          </div>
        </div>
      </div>
      <div className='team-info-persons'>
        <p>
          “Fast and outstanding resutls. Edie understands their customer’s needs. They have a young and talented team.”
        </p>
        <div className='team-image-persons'>
          <figure className='image-person'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Q_s0aDNp8H0l_xVKMpbVvCWcdiY6bX1KPw&usqp=CAU' alt='person'/>
          </figure>
          <div className='team-info'>
            <p>Carlos Tran</p>
            <p>The Decorate Gatsby</p>
          </div>
        </div>
      </div>
    </div>
  )
}
