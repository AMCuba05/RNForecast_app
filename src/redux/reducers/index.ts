import {combineReducers} from 'redux';
import {countriesReducer} from './countries';
import {CountryState} from '../../models/reducers';

export interface RootState {
  countries: CountryState;
}

export default combineReducers({
  countries: countriesReducer,
});
