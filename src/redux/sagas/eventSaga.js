import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchEvent() {
  try {
    const response = yield axios.get('/api/event');
    yield put({ type: 'SET_EVENT', payload: response.data });
  } catch (err) {
    console.log('saga event request failed', err);
  }
}

function* eventSaga() {
  yield takeLatest('FETCH_EVENT', fetchEvent);
}

export default eventSaga;
