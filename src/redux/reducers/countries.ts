import {Types} from '../actions/countries';
import {CountryState} from '../../models/reducers';

const initialState = {
  items: [],
};

export const countriesReducer = (
  state: CountryState = initialState,
  action: {payload: CountryState; type: string},
) => {
  switch (action.type) {
    case Types.GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        items: action.payload.items,
      };
    default:
      return state;
  }
};
