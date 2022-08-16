import 'react-native-gesture-handler';
import React from 'react';
import AppNavContainer from './src/navigations';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavContainer>
        
      </AppNavContainer>
    </Provider>
  );
};

export default App;
