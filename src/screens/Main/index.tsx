import React, {useEffect, useState} from 'react';
import {AutoCompleteCountrySearch} from '../../components/AutoCompleteCountrySearch';
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import MainStyles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reducers';
import {getCountriesRequest} from '../../redux/actions/countries';
import {getWeather} from '../../api/dailyWeather';
import {IWeatherData} from '../../models/api';
import {TAutocompleteDropdownItem} from 'react-native-autocomplete-dropdown';
import {WeatherCard} from '../../components/WeatherCard';
import {
  getDataFromStorage,
  saveDataToStorage,
} from '../../utils/dataSavedManager';

interface CoordsItem extends TAutocompleteDropdownItem {
  coords?: number[];
}

export const Main = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state: RootState) => state.countries);
  const [weather, setWeather] = useState<IWeatherData>();
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [dataSaved, setDataSaved] =
    useState<{data: IWeatherData; country: string}[]>();
  useEffect(() => {
    dispatch(getCountriesRequest());
    void updateDataSaved();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateDataSaved = async () => {
    const savedArray = await getDataFromStorage();
    setDataSaved(savedArray);
  };

  const getWeatherData = async (item: CoordsItem) => {
    // @ts-ignore
    const {data, country} = await getWeather(
      item.coords[0],
      item.coords[1],
      item.title,
    );
    setWeather(data);
    // @ts-ignore
    const savedArray = await getDataFromStorage();
    if (savedArray != null) {
      const newArray = [{data: data, country: country}, ...savedArray].slice(
        0,
        5,
      );
      await saveDataToStorage(newArray);
      setDataSaved(newArray);
    } else {
      const newArray = [{data: data, country: country}];
      await saveDataToStorage(newArray);
      setDataSaved(newArray);
    }
    // @ts-ignore
    setSelectedCountry(item.title);
  };

  return (
    <SafeAreaView>
      <ScrollView style={MainStyles.container}>
        <Text style={MainStyles.title}>Forecast App</Text>
        <AutoCompleteCountrySearch
          countries={countries}
          onSelectItem={getWeatherData}
        />
        {weather ? (
          <WeatherCard data={weather} countryName={selectedCountry} />
        ) : null}
        {dataSaved ? (
          <View>
            <Text style={MainStyles.title}>Previus search</Text>
            {dataSaved.map(({data, country}) => (
              <WeatherCard data={data} countryName={country} />
            ))}
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};
