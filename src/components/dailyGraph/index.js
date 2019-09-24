import { connect } from 'react-redux'
import  DailyGraph from './DailyGraph.js'
import  {fetchData} from '../../actions/DailyGraph'


const mapStateToProps = (state, ownProps) => ({
    ...state.DailyGraphReducer
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchData: () => dispatch(fetchData())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DailyGraph)