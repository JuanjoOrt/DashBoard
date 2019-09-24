import { connect } from 'react-redux'
import  ItemGraph from './ItemGraph.js'
import  {clearBuffer} from '../../../actions/DailyGraph'

const mapStateToProps = (state, ownProps) => ({
    ...state.DailyGraphReducer
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemGraph)