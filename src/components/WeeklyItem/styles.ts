import {StyleSheet} from 'react-native';

export const WeeklyItemStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
  imageContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#c8d9ed',
    borderRadius: 10,
  },
  itemContainer: {
    display: 'flex',
  },
  subtitle: {
    color: '#010057',
  },
});
