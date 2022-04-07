import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, imageUrl} = teamDetails

  return (
    <Link to={`/team-matches/${id}`}>
      <li>
        <img src={imageUrl} alt={`${name}`} />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
