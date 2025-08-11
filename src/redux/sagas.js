import { put, takeEvery, call, all } from "redux-saga/effects";
import {
  fetchItems,
  fetchSuccess,
  addItem,
  addSuccess,
  updateItem,
  updateSuccess,
  deleteItem,
  deleteSuccess,
  setError,
} from "./itemSlice";

import { api } from "../services/fakeApi";

function* fetchItemsSaga() {
  try {
    const data = yield call(api.fetchItems);
    yield put(fetchSuccess(data));
  } catch (e) {
    yield put(setError(e.message));
  }
}

function* addItemSaga(action) {
  try {
    const data = yield call(api.addItem, action.payload);
    yield put(addSuccess(data));
  } catch (e) {
    yield put(setError(e.message));
  }
}

function* updateItemSaga(action) {
  try {
    const { id, data } = action.payload;
    const updated = yield call(api.updateItem, id, data);
    yield put(updateSuccess(updated));
  } catch (e) {
    yield put(setError(e.message));
  }
}

function* deleteItemSaga(action) {
  try {
    yield call(api.deleteItem, action.payload);
    yield put(deleteSuccess(action.payload));
  } catch (e) {
    yield put(setError(e.message));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(fetchItems.type, fetchItemsSaga),
    takeEvery(addItem.type, addItemSaga),
    takeEvery(updateItem.type, updateItemSaga),
    takeEvery(deleteItem.type, deleteItemSaga),
  ]);
}
