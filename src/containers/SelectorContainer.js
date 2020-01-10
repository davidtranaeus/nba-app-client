import { connect } from 'react-redux'
import Selector from '../components/Selector'
import { setVisibilityFilter } from '../actions'

const mapStateToProps = state => ({
  conference: state.visibilityFilter
})

const mapDispatchToProps = dispatch => ({
  onClick: (conference) => dispatch(setVisibilityFilter(conference))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Selector)