// Write your code here
const MatchCard = props => {
  const {matchData} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchData

  return (
    <li>
      <img
        className="match-card-logo"
        src={competingTeamLogo}
        alt={competingTeam}
      />
      <h1 className="match-card-name">{competingTeam}</h1>
      <p className="match-card-result">{result}</p>
      <p className="match-status">{matchStatus}</p>
    </li>
  )
}

export default MatchCard
