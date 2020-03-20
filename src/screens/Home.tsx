import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import { withTheme, TouchableRipple } from 'react-native-paper';
import { Icon, Header } from "react-native-elements"
import { AppText } from '../components/AppText';
import { OffersIcon, ChevronDown } from '../utils/icons';
import { theme, base, small } from '../../App';
const Home = ()  => {
  return (
    <>
      <SafeAreaView>
        <Header
        containerStyle={styles.headerContainer}
        rightComponent={
          <TouchableOpacity style={{flexDirection:'row'}}>
            {OffersIcon({color:'#111',size:18})}
            <AppText>{' '}Offers</AppText>
          </TouchableOpacity>
        }
        placement={'left'} 
        centerComponent={
          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
            <AppText type={['large']}>Current Location{'  '}</AppText>
            <ChevronDown size={18} color={'#111'} />
          </TouchableOpacity>
        }
        />
        <TouchableRipple style={{padding:`${small}%`}}>
        <View style={{backgroundColor:theme.colors.theme,paddingVertical:`${base}%`,borderRadius:8,paddingLeft:`${small}%`}}>
          <AppText type={['white','large']}>All Restaurants</AppText>
          <AppText type={['small','white']}>Delivering now</AppText>
        </View>
        </TouchableRipple>
        
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

export default withTheme(Home);
