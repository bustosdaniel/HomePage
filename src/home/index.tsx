import AplicationHome from './aplicationHome'
import './index.css'
import InformationCardHome from './informationCardHome'
import TeamHome from './teamHome'

export default function HomePage() {
  return (
    <div className='home-contain'>
      <InformationCardHome />
      <AplicationHome />
      <TeamHome />
    </div>
  )
}
