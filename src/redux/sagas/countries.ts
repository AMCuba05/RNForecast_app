import {takeEvery, call, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/countries';
import * as api from '../../api/countries';
import {ICountry, Items} from '../../models/api';

function* getCountries() {
  try {
    const result: {data: ICountry[]} = yield call(api.getCountries);
    const formattedCountries: Items[] = result.data.flatMap(country => ({
      id: country.alpha2Code,
      title: country.name,
      coords: country.latlng,
    }));
    yield put(actions.getCountriesSuccess(formattedCountries));
  } catch (error) {
    console.error(error);
  }
}

function* watchGetCountriesRequest() {
  yield takeEvery(actions.Types.GET_COUNTRIES_REQUEST, getCountries);
}

const countrySagas = [fork(watchGetCountriesRequest)];

export default countrySagas;
