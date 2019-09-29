import { connect } from 'react-redux'
import  MicrosoftGraph from './MicrosoftGraph'
import {clearBuffer, fetchData} from '../../actions/MicrosoftGraph'


const mapStateToProps = (state, ownProps) => ({
    ...state.MicrosoftReducer
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchData: () => dispatch(fetchData()),
    clearBuffer: () => dispatch(clearBuffer())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MicrosoftGraph)