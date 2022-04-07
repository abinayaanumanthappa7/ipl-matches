// Write your code here
const LatestMatch = props => {
  const {latestMatch} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    secondInnings,
    umpires,
    venue,
    result,
  } = latestMatch
  return (
    <div>
      <h1>Latest Matches</h1>
      <div>
        <div>
          <h1>{competingTeam}</h1>
          <p>{date} </p>
          <p>{venue} </p>
          <p>{result} </p>
        </div>
        <img src={competingTeamLogo} alt={competingTeam} />
        <div>
          <div>
            <p>First Innings</p>
            <p>{firstInnings} </p>
          </div>
          <div>
            <p>Second Innings</p>
            <p>{secondInnings} </p>
          </div>
          <div>
            <p>Man of the match</p>
            <p>{manOfTheMatch}</p>
          </div>
          <div>
            <p>Umpires</p>
            <p>{umpires}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
