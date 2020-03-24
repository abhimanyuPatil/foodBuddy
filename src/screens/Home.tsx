import React from 'react';
import { Dimensions, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { TouchableRipple, withTheme } from 'react-native-paper';
import { AppText } from '../components/AppText';
import { base, small } from '../config/Theme';
import { FilterModal } from '../components/FilterModal';
import { LocationIcon, EditIcon } from '../utils/icons';

const screenDimensions = Dimensions.get('window');
const Home = (props:any)  => {
  const [filterModal,toggleModal] = React.useState(false)
  return (
    <>
      <SafeAreaView>
        <TouchableRipple style={{padding:`${small}%`}}>
        <View style={{backgroundColor:props.theme.colors.white,borderRadius:8,}}>
          <View style={{backgroundColor:props.theme.colors.theme,flexDirection:'row',justifyContent:'space-evenly',borderTopLeftRadius:8,borderTopRightRadius:8}}>
            <LocationIcon color={'#fff'} size={22} containerStyle={{marginVertical:`${small}%`}} />
            <AppText style={{marginVertical:`${small}%`}} type={['white','small']}>SB Road, Saptshri Appartment, Behind ...</AppText>
            <EditIcon color={'#fff'} size={18} containerStyle={{marginVertical:`${small}%`}} />
          </View>
          
          <AppText type={['small','white']}>Delivering now</AppText>
        </View>
        </TouchableRipple>
        <TouchableOpacity onPress={()=>toggleModal(true)}><AppText>Filters</AppText></TouchableOpacity>
        <FilterModal visible={filterModal} closeModal={()=> toggleModal(false)} />
      </SafeAreaView>
    </>
  );
};

export default withTheme(Home);
