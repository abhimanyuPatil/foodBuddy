import React from 'react';
import { Dimensions, SafeAreaView, View } from 'react-native';
import { TouchableRipple, withTheme } from 'react-native-paper';
import { AppText } from '../components/AppText';
import { base, small } from '../config/Theme';

const screenDimensions = Dimensions.get('window');

const buttonWidth = screenDimensions.width/6.5
const buttonHeight = screenDimensions.height/18
const buttonRadius = (buttonWidth/buttonHeight)*10
const Home = (props:any)  => {
  return (
    <>
      <SafeAreaView>
        <TouchableRipple style={{padding:`${small}%`}}>
        <View style={{backgroundColor:props.theme.colors.theme,paddingVertical:`${base}%`,borderRadius:8,paddingLeft:`${small}%`}}>
          <AppText type={['white','large']}>All Restaurants</AppText>
          <AppText type={['small','white']}>Delivering now</AppText>
        </View>
        </TouchableRipple>
        
        <View style={{width: 200,
 height: 0,
 borderBottomWidth: 100,
 borderBottomColor: 'red',
 borderLeftWidth: 50,
 borderLeftColor: 'transparent',
 borderRightWidth: 50,
 borderRightColor: 'transparent',
 borderStyle: 'solid'}} />
      </SafeAreaView>
    </>
  );
};

export default withTheme(Home);
