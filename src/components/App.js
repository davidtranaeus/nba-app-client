import axios from 'axios';
import React, { Component } from 'react';
import ConferenceTable from './ConferenceTable';
import './App.css';

const WEST_CONF = "WESTERN_CONFERENCE"
const EAST_CONF = "EASTERN_CONFERENCE"

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
    this.setState({
      selectedConference: conference,
    })
  }

  async componentDidMount() {
    const teams = await axios.get('http://localhost:3001/teams')
    this.setState({
      teamsWest: teams.data.filter(team => team.conference === 'west'),
      teamsEast: teams.data.filter(team => team.conference === 'east'),
    })
  }

  render() {
    const records = this.state.selectedConference === WEST_CONF ? this.state.teamsWest : this.state.teamsEast;

    return (
      <div className="app">
        <div className="selector-container">
          <div 
            onClick={() => this.changeConference(WEST_CONF)}
            className={this.state.selectedConference === WEST_CONF ? "underlined" : ""}
            >Western conference
          </div>
          <div 
            onClick={() => this.changeConference(EAST_CONF)}
            className={this.state.selectedConference === EAST_CONF ? "underlined" : ""}
            >Eastern conference
          </div>
        </div>
        <ConferenceTable records={records} className="conference-table" />
      </div>
    )
  }
}

export default App;