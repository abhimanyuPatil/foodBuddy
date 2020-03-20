import LottieView from 'lottie-react-native';
import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, View } from 'react-native';
import { withTheme } from 'react-native-paper';
import { xLarge } from '../../App';

const Cart = ()  => {
  return (
    <>
      <SafeAreaView>
          <View style={{
        width: '100%',
        paddingHorizontal: `${xLarge}%`,
      }}> 
<LottieView source={require('../assets/lottie/cooking.json')} autoPlay
        loop={true}
        style={{ width: '40%', alignSelf: 'center' }}/>
          </View>
        
      </SafeAreaView>
    </>
  );
};
const screenDimensions = Dimensions.get('window');
const styles = StyleSheet.create({
  headerContainer: {
    height: screenDimensions.height * 0.08,
    paddingTop: 0,
    margin: 0,
    backgroundColor: '#fff',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});

export default withTheme(Cart);
