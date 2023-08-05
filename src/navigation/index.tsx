import '../navigation/index.css'

export default function NavPage() {
  return (
    <div className="nav-contain">
      <div className="nav-name">
        <p>Edie</p>
      </div>
      <div className='nav-image-contain'>
        <figure className='nav-image'>
          <img src='https://cdn.icon-icons.com/icons2/1904/PNG/512/menu_121304.png' alt=''/>
        </figure>
        <ul className='nav-list'>
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
      </div>
    </div>
  )
}
