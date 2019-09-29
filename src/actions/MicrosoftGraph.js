import React from "react";
import dailyGraphParameters from '../parameters/dailyGraph';
import ConfigApi from '../ConfigApi';
import {getLineModel, getBarModel, getDonutModel} from '../Apexchart/model';

const URL_APPLE_DAILY = `${ConfigApi.urlApi}function=${ConfigApi.timeDaily}&symbol=${ConfigApi.apple}&apikey=${ConfigApi.key}`;
const URL_MICROSOFT_DAILY = `${ConfigApi.urlApi}function=${ConfigApi.timeDaily}&symbol=${ConfigApi.microsoft}&apikey=${ConfigApi.key}`;
const URL_GOOGLE_DAILY = `${ConfigApi.urlApi}function=${ConfigApi.timeDaily}&symbol=${ConfigApi.google}&apikey=${ConfigApi.key}`;
const URL_IBM_DAILY = `${ConfigApi.urlApi}function=${ConfigApi.timeDaily}&symbol=${ConfigApi.ibm}&apikey=${ConfigApi.key}`;
const URL_INTEL_DAILY = `${ConfigApi.urlApi}function=${ConfigApi.timeDaily}&symbol=${ConfigApi.intel}&apikey=${ConfigApi.key}`;


const fetchDataError = () => ({
    dataMicrosoftDaily: null,
    type: dailyGraphParameters.FETCH_ERROR
});



const fetchDataSuccess = (result) => ({
    dataMicrosoftDaily: result,
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
        name: 'Microsoft',
        data: ArrayValue.reverse()
    }];

    return model;
};

const getLastDay = (data) => {
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

    return {
        arrayCat: arrayNameValues,
        arrayValues: arrayData,
        date: firstItemDate
    }
};

const prepareComparation = async (data) => {
    let model = getBarModel();
    let object = data['Time Series (Daily)'];
    let dataResult = getLastDay(object);

    model.options.xaxis.categories = dataResult.arrayCat;
    model.options.title.text = dataResult.date + ' - Share price';
    model.series = [{
        name: 'price',
        data: dataResult.arrayValues
    }];

    return model;
};

const prepareAllComp = async (appleData, microsoftData, googleData, ibmData, intelData) => {
    let model = getDonutModel();
    appleData = await getLastDay(appleData['Time Series (Daily)']);
    microsoftData = await getLastDay(microsoftData['Time Series (Daily)']);
    googleData = await getLastDay(googleData['Time Series (Daily)']);
    ibmData = await getLastDay(ibmData['Time Series (Daily)']);
    intelData = await getLastDay(intelData['Time Series (Daily)']);

    model.options.labels = ['Apple','Microsoft','Google','Ibm','Intel',] ;
    model.series = [Math.round(appleData.arrayValues[0]),
                    Math.round(microsoftData.arrayValues[0]),
                    Math.round(googleData.arrayValues[0]) ,
                    Math.round(ibmData.arrayValues[0]),
                    Math.round(intelData.arrayValues[0])
                ]

    return model;
};



const getData = async () => {
    const appleData = await fetchUrl(URL_APPLE_DAILY);
    const microsoftData = await fetchUrl(URL_MICROSOFT_DAILY);
    const googleData = await fetchUrl(URL_GOOGLE_DAILY);
    const ibmData = await fetchUrl(URL_IBM_DAILY);
    const intelData = await fetchUrl(URL_INTEL_DAILY);

    const resultMicrosoftGoogle = await prepareDataDaily(microsoftData);
    const resultMicrosoftComparation = await prepareComparation(microsoftData);
    const resultPrepareAllComp = await prepareAllComp(appleData,microsoftData, googleData,ibmData,intelData);

    return  {
        dataDaily: resultMicrosoftGoogle,
        dataSharesComparation: resultMicrosoftComparation,
        dataAllComparation: resultPrepareAllComp
    }
}


export const clearBuffer = () => ({
    dataMicrosoftDaily: null,
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