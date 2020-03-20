import React from 'react';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import AppContainer from './src/config/routes';
import { theme } from './src/config/Theme';

const App = () =>{
  return (
    // <Provider>
      <PaperProvider theme={theme}>
        <StatusBar barStyle='light-content' />
        <AppContainer/>
      </PaperProvider>
    // </Provider>

  )
}
export default App;
