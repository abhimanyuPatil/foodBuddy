import React from 'react';
import { Dimensions, SafeAreaView, View, TouchableOpacity, ScrollView, Image, FlatList, Platform, PermissionsAndroid } from 'react-native';
import { TouchableRipple, withTheme } from 'react-native-paper';
import { AppText } from '../components/AppText';
import { base, small, theme } from '../config/Theme';
import { FilterModal } from '../components/FilterModal';
import { LocationIcon, EditIcon, ChevronDown, FilterIcon, FoodIcon } from '../utils/icons';
import { Icon } from 'react-native-elements';
import { res } from '../config/constants';
import { Label } from '../components/Label';
import { useNavigation } from '../hooks/useNavigation';
import { useDispatch, connect } from 'react-redux';
import { SET_ACTIVE_MESS } from '../Redux/cafeList/types';
import Geolocation from '@react-native-community/geolocation';
import { SET_LOCATION } from '../Redux/user/types';
import { useFetch } from 'use-fetch-lib';
import { IStore } from '../Redux/store';
import { IMessListReducer } from '../Redux/cafeList/reducer';

const screenDimensions = Dimensions.get('window');
interface IHome {
  messList: PickKey<IMessListReducer,'list'>
  areaId:number,
  location:{lat:number,lng:number}
}
const Home = (props:IHome)  => {
  const {areaId,messList,location} = props
  React.useEffect(()=>{
    if (Platform.OS === 'android') {
      requestLocationPermission();
    }
  },[])
  // const [menuList,status,serviceCaller] = useFetch({
  //   method:'get',
  //   url:'/api/',
  //   shouldDispatch:!!areaId
  // })
  // React.useEffect(()=>{

  // },[menuList,status])
  const dispatch = useDispatch()
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'FoodBuddy',
          message: 'FoodBuddy wants access to your location',
          buttonNegative: 'Deny',
          buttonPositive: 'Allow',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // console.log('You can use the location');
        Geolocation.getCurrentPosition(info =>{
           console.log('info',info)
           dispatch({type:SET_LOCATION,payload:{lat:info.coords.latitude,lng:info.coords.longitude}})
          });
      } else {
        console.log('location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const [filterModal,toggleModal] = React.useState(false)
  return (
    <>
      <SafeAreaView style={{flex:1}}>
        <View style={{paddingHorizontal:`${small}%`,flex:1}}>
          <TouchableRipple>
            <View style={{backgroundColor:theme.colors.white,borderRadius:8,elevation:4}}>
              <View style={{backgroundColor:theme.colors.theme,flexDirection:'row',justifyContent:'space-between',borderTopLeftRadius:8,borderTopRightRadius:8,paddingHorizontal:`${small}%`}}>
                <View style={{flexDirection:'row'}}>
                  <LocationIcon color={'#fff'} size={22} containerStyle={{marginVertical:`${small}%`}} />
                  <AppText style={{marginVertical:`${small}%`}} type={['white','small']}>SB Road, Saptshri Appartment, Behind ...</AppText>
                </View>
                <EditIcon color={'#fff'} size={18} containerStyle={{marginVertical:`${small}%`}} />
              </View>
              <View style={{backgroundColor:theme.colors.white,flexDirection:'row',justifyContent:'space-between',paddingHorizontal:`${small}%`,borderBottomLeftRadius:8,borderBottomRightRadius:8,alignItems:'center'}}>
                <View style={{flexDirection:'row'}}>
                  <Icon name='food' type='material-community' color={theme.colors.theme} size={22} />
                  <AppText style={{marginVertical:`${small}%`}} type={['theme','small']}> Mess</AppText>
                </View>
                <ChevronDown color={theme.colors.theme} size={18} containerStyle={{marginVertical:`${small}%`}} />
              </View>
            </View>
          </TouchableRipple>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:`${base}%`,alignItems:'center'}}>
            <AppText type={['center']}>Mess Listing</AppText>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <AppText>Filter   </AppText>
              <TouchableOpacity onPress={()=>toggleModal(true)}>
                <FilterIcon containerStyle={{borderWidth:1,borderRadius:15,height:30,width:30,alignItems:'center',justifyContent:'center',borderColor:theme.colors.theme}} color={theme.colors.theme} size={18} />
              </TouchableOpacity>
            </View>
          </View>
          <FlatList showsVerticalScrollIndicator={false} keyExtractor={(item,i)=> `${i}`} data={messList} renderItem={({item,index})=>{return <MessCard theme={theme} M={item} key={index} />}} />

        </View>
        <FilterModal visible={filterModal} closeModal={()=> toggleModal(false)} />
      </SafeAreaView>
    </>
  );
};
const mapStateToProps = ((state:IStore)=>{
  return {
    areaId:state.userReducer.areaId,
    location:state.userReducer.location,
    messList:state.messListReducer.list
  }
})
export default connect(mapStateToProps,{})(Home)
const MessCard =(props:any)=>{
  const {M}=props
  const navigation = useNavigation()
  const dispatch = useDispatch()
  return (
    <TouchableOpacity onPress={()=>{dispatch({type:SET_ACTIVE_MESS,payload:M});navigation.navigate('SingleMess')}}  style={{backgroundColor:'#fff',borderRadius:8,paddingVertical:`${base}%`,paddingLeft:`${base}%`,flexDirection:'row',marginTop:`${small}%`}}>
      <View style={{flex:0.2}}>
        <Image source={require('../assets/images/tiffin.png')} resizeMode='contain' style={{width:'90%',height:screenDimensions.height*.15}} />
      </View>
      <View style={{flex:0.8}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <AppText type={['bold']}>
              {M.shop_name}
            </AppText>
            <Image resizeMode='contain' style={{width:20,height:20,marginRight:base}}  source={require('../assets/images/veg.png')} />
        </View>
      <View style={{flexDirection:'row',marginVertical:`${small}%`}}>
        <LocationIcon color={props.theme.colors.theme} size={18} />
        <AppText type={['small','capitalized']}>{M.address}</AppText>
      </View>
      <View style={{flexDirection:'row',flexWrap: 'wrap',display: 'flex',marginTop:`${small}%`}}>
      {
        M.meal_type === 3 ? 
        <><Label type='success' inverted text='Lunch' ViewStyle={{marginHorizontal:`${small}%`}} />
        <Label type='success' inverted text='Dinner' />
        </>
        :
        M.meal_type === 2 ? <Label type='success' inverted text='Dinner' />
        : <Label type='success' inverted text='Lunch' />
      }
      </View>
    </View>
  </TouchableOpacity>
  )
}