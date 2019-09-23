
import type from '../parameters/todo'

const _initialState = () => ({
    data: null,
    error: null,
});

const _setData = (state, {data, dataColumn}) => ({...state, data, dataColumn});

export default (state = _initialState(), action) => {
    switch (action.type) {
        case type.FETCH_TODO:
            return _setData(state, action);
        default:
            return state;
    }
};