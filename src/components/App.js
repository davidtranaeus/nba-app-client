import React from 'react'
import ReactGA from 'react-ga';
import SelectorContainer from '../containers/SelectorContainer'
import StandingsContainer from '../containers/StandingsContainer'
import './App.css';

ReactGA.initialize('UA-155888282-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => (
  <div>
    <SelectorContainer />
    <StandingsContainer />
  </div>
)
export default App