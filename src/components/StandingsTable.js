import React, { Component } from 'react';
import axios from 'axios';

class StandingsTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      standings: [],
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/standings`)
    .then(res => {
      this.setState({
        standings: res.data
      })
    }).catch(err => console.log(`Could not retrieve standings: ${err}`))
  }

  render() {
    const standingsList = this.state.standings.map(standing => 
      <li key={standing.teamId}>
        {standing.teamId}
      </li>)
    return (
      <ul>
        { standingsList }
      </ul>
    )
  }
}

export default StandingsTable;