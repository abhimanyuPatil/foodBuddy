import React from 'react';
import { Dimensions, SafeAreaView, View, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
import { TouchableRipple, withTheme } from 'react-native-paper';
import { AppText } from '../components/AppText';
import { base, small, theme } from '../config/Theme';
import { FilterModal } from '../components/FilterModal';
import { LocationIcon, EditIcon, ChevronDown, FilterIcon, FoodIcon } from '../utils/icons';
import { Icon } from 'react-native-elements';
import { messList, res } from '../config/constants';
import { Label } from '../components/Label';
import { useNavigation } from '../hooks/useNavigation';

const screenDimensions = Dimensions.get('window');
const Home = (props:any)  => {
  const [filterModal,toggleModal] = React.useState(false)
  return (
    <>
      <SafeAreaView style={{flex:1}}>
        <View style={{paddingHorizontal:`${small}%`,flex:1}}>
          <TouchableRipple>
            <View style={{backgroundColor:props.theme.colors.white,borderRadius:8,elevation:4}}>
              <View style={{backgroundColor:props.theme.colors.theme,flexDirection:'row',justifyContent:'space-between',borderTopLeftRadius:8,borderTopRightRadius:8,paddingHorizontal:`${small}%`}}>
                <View style={{flexDirection:'row'}}>
                  <LocationIcon color={'#fff'} size={22} containerStyle={{marginVertical:`${small}%`}} />
                  <AppText style={{marginVertical:`${small}%`}} type={['white','small']}>SB Road, Saptshri Appartment, Behind ...</AppText>
                </View>
                <EditIcon color={'#fff'} size={18} containerStyle={{marginVertical:`${small}%`}} />
              </View>
              <View style={{backgroundColor:props.theme.colors.white,flexDirection:'row',justifyContent:'space-between',paddingHorizontal:`${small}%`,borderBottomLeftRadius:8,borderBottomRightRadius:8,alignItems:'center'}}>
                <View style={{flexDirection:'row'}}>
                  <Icon name='food' type='material-community' color={props.theme.colors.theme} size={22} />
                  <AppText style={{marginVertical:`${small}%`}} type={['theme','small']}> Mess</AppText>
                </View>
                <ChevronDown color={props.theme.colors.theme} size={18} containerStyle={{marginVertical:`${small}%`}} />
              </View>
            </View>
          </TouchableRipple>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:`${base}%`,alignItems:'center'}}>
            <AppText type={['center']}>Mess Listing</AppText>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <AppText>Filter   </AppText>
              <TouchableOpacity onPress={()=>toggleModal(true)}>
                <FilterIcon containerStyle={{borderWidth:1,borderRadius:15,height:30,width:30,alignItems:'center',justifyContent:'center',borderColor:props.theme.colors.theme}} color={props.theme.colors.theme} size={18} />
              </TouchableOpacity>
            </View>
          </View>
          <FlatList showsVerticalScrollIndicator={false} keyExtractor={(item,i)=> `${i}`} data={res.data} renderItem={({item,index})=>{return <MessCard theme={props.theme} M={item} key={index} />}} />

        </View>
        <FilterModal visible={filterModal} closeModal={()=> toggleModal(false)} />
      </SafeAreaView>
    </>
  );
};

const MessCard =(props:any)=>{
  const {M}=props
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('SingleMess')}  style={{backgroundColor:'#fff',borderRadius:8,paddingVertical:`${base}%`,paddingLeft:`${base}%`,flexDirection:'row',marginTop:`${small}%`}}>
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
      {/* <AppText type={['small']}>
      {
        M.cuisines.map((C,i)=>{
          if(i+1===M.cuisines.length){
            return ` ${C}`
          }else if(i===0){
            return `${C},`
          }else{
            return ` ${C},`
          }
        })
      }
      </AppText> */}
      <View style={{flexDirection:'row',marginVertical:`${small}%`}}>
        <LocationIcon color={props.theme.colors.theme} size={18} />
        <AppText type={['small','capitalized']}>{M.address}</AppText>
      </View>
      {/* <View style={{flexDirection:'row'}}>
        <FoodIcon color={props.theme.colors.theme} size={18}/>
        <AppText type={['success','small']}>
          {' '}
          {
            M.services.map((S,index)=>{
              if(index+1===M.services.length){
                return `& ${S}`
              }else{
                return `${S}, `
              }
            })
          }
        </AppText>
      </View> */}
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
    {/* <Icon name='checkcircle' type='antdesign' color={theme.colors.theme} containerStyle={{position:'absolute',right:0,top:'50%'}} /> */}
  </TouchableOpacity>
  )
}
export default withTheme(Home);
