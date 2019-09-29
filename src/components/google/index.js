import { connect } from 'react-redux'
import  GoogleGraph from './GoogleGraph.js'
import {clearBuffer, fetchData} from '../../actions/GoogleGraph'


const mapStateToProps = (state, ownProps) => ({
    ...state.GoogleReducer
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchData: () => dispatch(fetchData()),
    clearBuffer: () => dispatch(clearBuffer())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GoogleGraph)