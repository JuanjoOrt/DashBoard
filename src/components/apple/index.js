import { connect } from 'react-redux'
import  AppleGraph from './AppleGraph.js'
import {clearBuffer, fetchData} from '../../actions/AppleGraph'


const mapStateToProps = (state, ownProps) => ({
    ...state.DailyGraphReducer
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchData: () => dispatch(fetchData()),
    clearBuffer: () => dispatch(clearBuffer())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppleGraph)