import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, View } from 'react-native';
import { TouchableRipple, withTheme } from 'react-native-paper';
import { AppText } from '../components/AppText';
import { small, base } from '../config/Theme';
import { Button, Icon } from 'react-native-elements';

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
        <Button 
        containerStyle={{alignSelf:'center',elevation:4,}}
        buttonStyle={{backgroundColor:props.theme.colors.theme,width:buttonWidth,height:buttonHeight,borderRadius:buttonRadius}}
        icon={
          <Icon
            name="check"
            size={20}
            color={props.theme.colors.white}
          />} 
        />
      </SafeAreaView>
    </>
  );
};

export default withTheme(Home);
