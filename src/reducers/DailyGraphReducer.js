
import type from '../parameters/dailyGraph'

const _initialState = () => ({
    data: null,
    type: null,
});

const _setData = (state, {data, dataColumn}) => ({...state, data, dataColumn});

export default (state = _initialState(), action) => {
    switch (action.type) {
        case type.FETCH_SUCCESS:
            return _setData(state, action);
        default:
            return state;
    }
};