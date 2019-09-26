import React from "react";
import dailyGraphParameters from '../parameters/dailyGraph';
import ConfigApi from '../ConfigApi';
import getModel from '../Apexchart/model';

const URL_APPLE_DAILY = `${ConfigApi.urlApi}function=${ConfigApi.timeDaily}&symbol=${ConfigApi.apple}&apikey=${ConfigApi.key}`;



const fetchDataError = () => ({
    dataAppleDaily: null,
    type: dailyGraphParameters.FETCH_ERROR
});



const fetchDataSuccess = (result) => ({
    dataAppleDaily: result,
    type: dailyGraphParameters.FETCH_SUCCESS
});



const fetchUrl = async (url) => {
    return await fetch(url)
        .then(res => {
            return res.json();
        }).then(json => {
            return json;
        });
};

const prepareData = (data) => {
    let model = getModel();
    const objectArray = data['Time Series (Daily)'];
    const ArrayDate = [];
    const ArrayValue = [];
    for (let item in objectArray){
        let value = objectArray[item]['1. open'];
        ArrayDate.push(item);
        ArrayValue.push(value);
    }

    model.options.xaxis.categories = ArrayDate.reverse();
    model.series = [{
        name: 'Apple',
        data: ArrayValue.reverse()
    }];

    return model;
};


export const clearBuffer = () => ({
    dataAppleDaily: null,
    type: dailyGraphParameters.CLEAR_BUFFER
});


export const fetchData = () =>
    async (dispatch) => {
        try {
            let result = await fetchUrl(URL_APPLE_DAILY);
            dispatch(fetchDataSuccess(prepareData(result)));
        } catch (error) {
            console.error(error);
            dispatch(fetchDataError(error))
        }
    };