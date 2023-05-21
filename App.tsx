import React from 'react';
import {StatusBar} from 'react-native';

import {persistor, store} from '@redux/store';
import RootStack from 'navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar
            translucent
            barStyle={'dark-content'}
            backgroundColor={'transparent'}
          />
          <GestureHandlerRootView style={{flex: 1}}>
            <RootStack />
          </GestureHandlerRootView>
        </PersistGate>
      </Provider>
      {/* {loading && (
        <Spinner mode={'overlay'} size={'large'} color={Color.YELLOW_HOLDER} />
      )} */}
    </SafeAreaProvider>
  );
};

export default App;
