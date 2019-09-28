import React from "react";
import dailyGraphParameters from '../parameters/dailyGraph';
import ConfigApi from '../ConfigApi';
import {getLineModel, getBarModel} from '../Apexchart/model';

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

const prepareDataDaily = (data) => {
    let model = getLineModel();
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

const prepareComparation = async (data) => {
    let model = getBarModel();
    data = data['Time Series (Daily)'];
    let firstItemDate = Object.keys(data)[0];
    let firstItemData = data[Object.keys(data)[0]];
    let arrayData = [];

    let arrayNameValues = Object.keys(firstItemData).map(item => {
            return item.split(' ')[1];
    });

    arrayNameValues.pop();

    for (let index in firstItemData){
        if (index !== '5. volume'){
            arrayData.push(firstItemData[index]);
        }
    }

    model.options.xaxis.categories = arrayNameValues;
    model.options.title.text = firstItemDate + ' - Share price';
    model.series = [{
        name: 'price',
        data: arrayData
    }];

    return model;
};

const getData = async () => {
    let appleData = await fetchUrl(URL_APPLE_DAILY);
    let resultDailyApple = await prepareDataDaily(appleData);
    let resultAppleComparation = await prepareComparation(appleData);

    return  {
        dataDaily: resultDailyApple,
        dataSharesComparation: resultAppleComparation
    }
}


export const clearBuffer = () => ({
    dataAppleDaily: null,
    type: dailyGraphParameters.CLEAR_BUFFER
});


export const fetchData = () =>
    async (dispatch) => {
        try {
            let result = await getData();
            dispatch(fetchDataSuccess(result));
        } catch (error) {
            console.error(error);
            dispatch(fetchDataError(error))
        }
    };