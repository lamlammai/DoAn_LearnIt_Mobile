// import appReducer, {IAppState} from '@redux/slices/appSlice';
import {setAutoFreeze} from 'immer';
import {combineReducers} from 'redux';
import logger from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';

import appReducer, {IAppState} from '@redux/slices/appSlice';
import createSagaMiddleware from 'redux-saga';
import accountReducer, {IUserState} from '../slices/accountSlice';
import rootSaga from './rootSagas';

setAutoFreeze(false);

export interface IRootState {
  infoUser: IUserState;
  account: IUserState;
  app: IAppState;
}

const reducers = combineReducers({
  account: accountReducer,
  app: appReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: 100000,
  whitelist: ['infoUser', 'app'],
  blacklist: ['account'],
};

const sagaMiddleware = createSagaMiddleware();
let middleware = [sagaMiddleware];
if (__DEV__) {
  false && middleware.push(logger);
}
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: middleware,
});
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export {persistor, store};
