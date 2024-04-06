import React from 'react';
import AppNavigation from './src/navigation';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
