import {Items} from '../../models/api';

export const Types = {
  GET_COUNTRIES_REQUEST: 'GET_COUNTRIES_REQUEST',
  GET_COUNTRIES_SUCCESS: 'GET_COUNTRIES_SUCCESS',
};

export const getCountriesRequest = () => ({
  type: Types.GET_COUNTRIES_REQUEST,
});

export const getCountriesSuccess = (items: Items[]) => ({
  type: Types.GET_COUNTRIES_SUCCESS,
  payload: {items},
});
