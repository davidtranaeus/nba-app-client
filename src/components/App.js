import axios from 'axios';
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import ConferenceTable from './ConferenceTable';
import './App.css';

const WEST_CONF = "WESTERN_CONFERENCE"
const EAST_CONF = "EASTERN_CONFERENCE"

ReactGA.initialize('UA-155888282-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teamsWest: [],
      teamsEast: [],
      selectedConference: WEST_CONF,
    }
  }

  changeConference(conference) {
    ReactGA.event({
      category: 'User',
      action: 'Selected Conference',
      label: conference
    });

    this.setState({
      selectedConference: conference,
    })
  }

  async componentDidMount() {
    const url = (process.env.NODE_ENV === 'development') 
      ? 'http://localhost:3001/teams'
      : 'http://ec2-13-53-135-10.eu-north-1.compute.amazonaws.com/teams';

    const teams = await axios.get(url)
    this.setState({
      teamsWest: teams.data.filter(team => team.conference === 'west'),
      teamsEast: teams.data.filter(team => team.conference === 'east'),
    })
  }

  render() {
    const records = this.state.selectedConference === WEST_CONF ? this.state.teamsWest : this.state.teamsEast;

    return (
      <React.Fragment>
        <div className="selector-container">
          <div 
            onClick={() => this.changeConference(WEST_CONF)}
            className={this.state.selectedConference === WEST_CONF ? "selected" : "unselected"}
            >Western conference
          </div>
          <div 
            onClick={() => this.changeConference(EAST_CONF)}
            className={this.state.selectedConference === EAST_CONF ? "selected" : "unselected"}
            >Eastern conference
          </div>
        </div>
        <ConferenceTable records={records} />
      </React.Fragment>
    )
  }
}

export default App;