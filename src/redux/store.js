import { configureStore } from "@reduxjs/toolkit";
const createSagaMiddleware = require("redux-saga").default;
import itemReducer from "./itemSlice";
import rootSaga from "./sagas";
import reactotron from "../../ReactotronConfig";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    items: itemReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat(reactotron.createEnhancer()),
});

sagaMiddleware.run(rootSaga);

export default store;
