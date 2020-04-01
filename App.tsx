import React from 'react';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import AppContainer from './src/config/routes';
import { theme } from './src/config/Theme';
import { connect, Provider } from 'react-redux';
import store from './src/Redux/store';

const App = () =>{
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <StatusBar barStyle='light-content' />
        <AppContainer/>
      </PaperProvider>
     </Provider>

  )
}
export default App;
