import { connect } from 'react-redux'
import ReactGA from 'react-ga';
import Selector from '../components/Selector'
import { setVisibilityFilter } from '../actions'

const mapStateToProps = state => ({
  conference: state.visibilityFilter
})

const mapDispatchToProps = dispatch => ({
  onClick: (conference) => {
    dispatch(setVisibilityFilter(conference))
    
    ReactGA.event({
      category: 'User',
      action: 'Selected Conference',
      label: conference
    });
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Selector)