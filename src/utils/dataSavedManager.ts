import AsyncStorage from '@react-native-async-storage/async-storage';
import {IWeatherData} from '../models/api';

export const getDataFromStorage = async () => {
  let response;
  await AsyncStorage.getItem('weatherArray')
    .then(req => JSON.parse(<string>req))
    .then(json => (response = json))
    .catch(error => (response = error));
  return response;
};

export const saveDataToStorage = async (
  arr: {data: IWeatherData; country: string}[],
) => {
  await AsyncStorage.setItem('weatherArray', JSON.stringify(arr))
    .then(json => console.log('success! saved', json))
    .catch(error => console.log('error!', error));
};
