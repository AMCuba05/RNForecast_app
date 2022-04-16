import React from 'react';
import {IDaily} from '../../models/api';
import {Image, Text, View} from 'react-native';
import {WeeklyItemStyles} from './styles';
import { kelvinToCelsius } from "../../utils/converter";

interface WeeklyItemProps {
  data: IDaily;
}

export const WeeklyItem: React.FC<WeeklyItemProps> = ({data}) => {
  const date = new Date(data.dt * 1000);
  return (
    <View style={WeeklyItemStyles.container}>
      <Image
        style={WeeklyItemStyles.imageContainer}
        source={{
          uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        }}
      />
      <View style={WeeklyItemStyles.itemContainer}>
        <Text style={WeeklyItemStyles.subtitle}>Date</Text>
        <Text>
          {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
        </Text>
      </View>
      <View style={WeeklyItemStyles.itemContainer}>
        <Text style={WeeklyItemStyles.subtitle}>Max</Text>
        <Text>{kelvinToCelsius(data.temp.max)} °C</Text>
      </View>
      <View style={WeeklyItemStyles.itemContainer}>
        <Text style={WeeklyItemStyles.subtitle}>Min</Text>
        <Text>{kelvinToCelsius(data.temp.min)} °C</Text>
      </View>
      <View style={WeeklyItemStyles.itemContainer}>
        <Text style={WeeklyItemStyles.subtitle}>Humility</Text>
        <Text>{data.humidity} %</Text>
      </View>
    </View>
  );
};
