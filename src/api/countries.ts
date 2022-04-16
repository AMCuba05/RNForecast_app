import axios from 'axios';
import {ICountry} from '../models/api';

export const getCountries = () => {
  return axios.get<ICountry>('https://restcountries.com/v2/all');
};
