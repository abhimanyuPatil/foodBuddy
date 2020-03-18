import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import AppContainer from './src/config/routes';
import React from 'react'
export const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
    theme:'#ff624f',
    secondary:"#222a41"
  },
};
const App = () =>{
  return (
    // <Provider>
      <PaperProvider theme={theme}>
        <AppContainer/>
      </PaperProvider>
    // </Provider>

  )
}
export default App;
