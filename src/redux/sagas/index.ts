import {all} from 'redux-saga/effects';
import countrySagas from './countries';

export default function* rootSaga() {
  yield all([...countrySagas]);
}
