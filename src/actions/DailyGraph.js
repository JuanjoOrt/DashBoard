import React from "react";
import dailyGraphParameters from '../parameters/dailyGraph';



const fetchDataError = () => ({
    data: null,
    type: dailyGraphParameters.FETCH_ERROR
});

const fetchDataSuccess = (result) => {
    console.log(result.value);

    return {
        data: null,
        type: dailyGraphParameters.FETCH_SUCCESS
    }
};


export const fetchData = (url) =>
    async (dispatch) => {
        try {
            let result = fetch(url).then(res => {
                    return res.json();
                }).then(json => {
                    return json;
                });
            dispatch(fetchDataSuccess(result))
        } catch (error) {
            console.error(error);
            dispatch(fetchDataError(error))
        }
    };