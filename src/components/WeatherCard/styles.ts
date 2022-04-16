import {StyleSheet} from 'react-native';

export const WeatherCardStyles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#e1f1fd',
    marginBottom: 10,
  },
  imgContainer: {
    width: 115,
    height: 115,
    backgroundColor: '#c8d9ed',
    borderRadius: 10,
  },
  weatherRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  temperatureInfo: {
    marginLeft: 20,
  },
  moreInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  moreInformationItem: {
    flex: 1,
  },
  buttonTitle: {
    color: '#010057',
    textDecorationLine: 'underline',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#010048',
  },
  subtitle: {
    color: '#010057',
  },
});
