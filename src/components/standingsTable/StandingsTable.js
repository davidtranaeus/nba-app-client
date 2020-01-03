import axios from 'axios';
import React, { Component } from 'react';
import ConferenceTable from '../conferenceTable/ConferenceTable';

class StandingsTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teamsWest: [],
      teamsEast: [],
    }
  }

  async componentDidMount() {
    const teams = await axios.get('http://localhost:3001/teams')
    this.setState({
      teamsWest: teams.data.filter(team => team.conference === 'west'),
      teamsEast: teams.data.filter(team => team.conference === 'east'),
    })
  }

  render() {
    return (
      <ConferenceTable records={this.state.teamsEast}/>
    )
  }
}

export default StandingsTable;