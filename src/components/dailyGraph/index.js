import { connect } from 'react-redux'
import  DailyGraph from './DailyGraph.js'
import {clearBuffer, fetchData} from '../../actions/DailyGraph'


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
)(DailyGraph)