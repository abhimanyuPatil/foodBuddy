import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import AppContainer from './src/config/routes';
import { theme } from './src/config/Theme';
import store from './src/Redux/store';
import {UseFetchProvider} from 'use-fetch-lib';
import { BASE_URL } from './src/config/constants';

const App = () =>{
  const [token, setToken] = useState('');
  useEffect(()=>{
    const unSubscribe = store.subscribe(() => {
      setToken(store.getState()?.userReducer?.token || '');
    });
    return () => {
      unSubscribe();
    };
  },[])
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <StatusBar barStyle='light-content' />
        <UseFetchProvider
              baseUrl={BASE_URL}
              authorizationToken={`Bearer ${token}`}>
          <AppContainer/>
        </UseFetchProvider> 
      </PaperProvider>
     </Provider>

  )
}
export default App;
