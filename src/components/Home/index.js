import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamsData: [], isLoading: true}

  componentDidMount = () => {
    this.getTeamData()
  }

  getTeamData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(eachData => ({
      name: eachData.name,
      id: eachData.id,
      imageUrl: eachData.team_image_url,
    }))
    this.setState({teamsData: updatedData, isLoading: false})
  }

  render() {
    const {teamsData, isLoading} = this.state
    return (
      <div>
        <div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
            />
            <h1>IPL Dashboard</h1>
          </div>
          <div>
            {isLoading ? (
              <div testid="loader" className="loader-container">
                <Loader type="Rings" color="#00BFFF" height={80} width={80} />
              </div>
            ) : (
              <ul>
                {teamsData.map(eachTeam => (
                  <TeamCard key={eachTeam.id} teamDetails={eachTeam} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
