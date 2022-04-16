import React, {useState} from 'react';
import {IWeatherData} from '../../models/api';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {kelvinToCelsius} from '../../utils/converter';
import {WeatherCardStyles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {WeeklyItem} from '../WeeklyItem';

interface WeatherCardProps {
  data: IWeatherData;
  countryName: string;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({
  data,
  countryName,
}) => {
  const navigation = useNavigation();
  const date = new Date(data.current.dt * 1000);
  const [show, setShow] = useState<boolean>(false);
  const onPressSeeMap = () => {
    // @ts-ignore
    navigation.navigate('MapView', {lat: data.lat, lon: data.lon});
  };
  const onPressWeeklyInfo = () => setShow(!show);
  return (
    <View style={WeatherCardStyles.container}>
      <Text style={WeatherCardStyles.title}>{countryName}</Text>
      <View style={WeatherCardStyles.moreInformationItem}>
        <Text style={WeatherCardStyles.subtitle}>Date and Time</Text>
        <Text>
          {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()} -{' '}
          {date.getHours()}:{date.getUTCMinutes()}
        </Text>
      </View>
      <View style={WeatherCardStyles.weatherRow}>
        <Image
          style={WeatherCardStyles.imgContainer}
          source={{
            uri: `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@4x.png`,
          }}
        />
        <View style={WeatherCardStyles.temperatureInfo}>
          <Text style={WeatherCardStyles.subtitle}>Temperature</Text>
          <Text>{kelvinToCelsius(data.current.temp)} °C</Text>
          <Text style={WeatherCardStyles.subtitle}>Max Temperature</Text>
          <Text>{kelvinToCelsius(data.daily[0].temp.max)} °C</Text>
          <Text style={WeatherCardStyles.subtitle}>Min Temperature</Text>
          <Text>{kelvinToCelsius(data.daily[0].temp.min)} °C</Text>
        </View>
      </View>
      <View style={WeatherCardStyles.moreInfoContainer}>
        <View style={WeatherCardStyles.moreInformationItem}>
          <Text style={WeatherCardStyles.subtitle}>Weather</Text>
          <Text>{data.current.weather[0].description}</Text>
        </View>
        <View style={WeatherCardStyles.moreInformationItem}>
          <Text style={WeatherCardStyles.subtitle}>Wind Speed</Text>
          <Text>{data.current.wind_speed} Km/H</Text>
        </View>
      </View>
      <View style={WeatherCardStyles.moreInfoContainer}>
        <View style={WeatherCardStyles.moreInformationItem}>
          <Text style={WeatherCardStyles.subtitle}>Pressure</Text>
          <Text>{data.current.pressure}</Text>
        </View>
        <View style={WeatherCardStyles.moreInformationItem}>
          <Text style={WeatherCardStyles.subtitle}>Humidity</Text>
          <Text>{data.current.humidity} %</Text>
        </View>
      </View>
      <View style={WeatherCardStyles.moreInfoContainer}>
        <TouchableOpacity
          style={WeatherCardStyles.moreInformationItem}
          onPress={onPressWeeklyInfo}>
          {!show ? (
            <Text style={WeatherCardStyles.buttonTitle}>
              Weekly information
            </Text>
          ) : (
            <Text style={WeatherCardStyles.buttonTitle}>
              Hide Weekly information
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={WeatherCardStyles.moreInformationItem}
          onPress={onPressSeeMap}>
          <Text style={WeatherCardStyles.buttonTitle}>See map</Text>
        </TouchableOpacity>
      </View>
      {show ? data.daily.map(item => <WeeklyItem data={item} />) : null}
    </View>
  );
};
