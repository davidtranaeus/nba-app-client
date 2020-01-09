import { connect } from 'react-redux'
import Selector from '../components/Selector'
import { setVisibilityFilter } from '../actions'

const mapDispatchToProps = dispatch => ({
  onClick: (conference) => dispatch(setVisibilityFilter(conference))
})

export default connect(
  null,
  mapDispatchToProps
)(Selector)