import axios from 'axios';
import {IWeatherData} from '../models/api';

export const getWeather = async (lat: number, lon: number, country: string) => {
  const response: {data: IWeatherData} = await axios.get<IWeatherData>(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=70c5d34708905a5cdc23912cddde6733`,
  );
  return {data: response.data, country: country};
};
