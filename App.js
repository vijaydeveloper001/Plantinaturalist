/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavgigation from './src/Navigation/AppNavigation/AppNavgigation';
import {Provider} from 'react-redux';
import {store,persistor} from './src/redux/store/store';
import AuthNavigation from './src/Navigation/AuthNavigation/AuthNavigation';
import {LocalDB} from './src/Contants/LocalDB';
import Route from './src/Navigation/Route';
import {PersistGate} from 'redux-persist/integration/react';
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={false} persistor={persistor}>
        <NavigationContainer>
          <Route />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
