import accountSage from '@redux/saga/account.sage';
import {all} from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([...accountSage]);
}
