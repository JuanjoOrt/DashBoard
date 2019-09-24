import React from "react";
import dailyGraphParameters from '../parameters/dailyGraph';
import ConfigApi from '../ConfigApi';

const urlMicrosoft = `${ConfigApi.urlApi}function=${ConfigApi.timeDaily}&symbol=${ConfigApi.microsoft}&apikey=${ConfigApi.key}`;
const urlIbm = `${ConfigApi.urlApi}function=${ConfigApi.timeDaily}&symbol=${ConfigApi.ibm}&apikey=${ConfigApi.key}`;
const urlApple = `${ConfigApi.urlApi}function=${ConfigApi.timeDaily}&symbol=${ConfigApi.apple}&apikey=${ConfigApi.key}`;
const urlGoogle = `${ConfigApi.urlApi}function=${ConfigApi.timeDaily}&symbol=${ConfigApi.google}&apikey=${ConfigApi.key}`;


const fetchDataError = () => ({
    dataDaily: null,
    type: dailyGraphParameters.FETCH_ERROR
});

const fetchDataSuccess = (result) => ({
    dataDaily: result,
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

export const fetchData = () =>
    async (dispatch) => {
        try {
            let result = {
                Microsoft : await fetchUrl(urlMicrosoft),
                Google: await fetchUrl(urlGoogle),
                Ibm: await fetchUrl(urlIbm),
                Apple: await fetchUrl(urlApple)
            };
            dispatch(fetchDataSuccess(result))
        } catch (error) {
            console.error(error);
            dispatch(fetchDataError(error))
        }
    };