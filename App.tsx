import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {Provider} from 'react-redux';
import reducers from './src/redux/reducers';
import rootSaga from './src/redux/sagas';
import AppStack from './src/routes/AppStack';
import { NavigationContainer } from "@react-navigation/native";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
