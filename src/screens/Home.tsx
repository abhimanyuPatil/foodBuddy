import React, { useState } from 'react';
import { Dimensions, SafeAreaView, View, TouchableOpacity, ScrollView, Image, FlatList, Platform, PermissionsAndroid, Alert, ImageBackground } from 'react-native';
import { TouchableRipple, withTheme } from 'react-native-paper';
import { AppText } from '../components/AppText';
import { base, small, theme, ITheme } from '../config/Theme';
import { FilterModal } from '../components/FilterModal';
import { LocationIcon, EditIcon, ChevronDown, FilterIcon, FoodIcon } from '../utils/icons';
import { Icon } from 'react-native-elements';
import { res, rupee } from '../config/constants';
import { Label } from '../components/Label';
import { useNavigation } from '../hooks/useNavigation';
import { useDispatch, connect } from 'react-redux';
import { SET_ACTIVE_MESS } from '../Redux/cafeList/types';
import Geolocation from '@react-native-community/geolocation';
import { SET_LOCATION } from '../Redux/user/types';
import { useFetch } from 'use-fetch-lib';
import { IStore } from '../Redux/store';
import { IMessListReducer, ISingleMess } from '../Redux/cafeList/reducer';
import { ICartReducer } from '../Redux/cart/reducer';
import { Footer } from './SingleMess';
import { EMPTY_CART } from '../Redux/cart/types';
import Carousel from 'react-native-snap-carousel';
import ImageOverlay from "react-native-image-overlay";
import { cartActions } from '../Redux/cart';
const screenDimensions = Dimensions.get('window');
const banner = [
  {image:require('../assets/images/img1.jpg')},
  {image:require('../assets/images/img3.jpg')},
  {image:require('../assets/images/img1.jpg')},
  // {image:require('../assets/images/img2.jpg')}
]
const display1 = [
  {
    title: 'North Indian',
    image: require('../assets/images/northIndia.jpeg')
  },
  {
    title: 'Biryani',
    image: require('../assets/images/biryani.jpg')
  },
  {
    title: 'Fast Food',
    image: require('../assets/images/fastfood.jpg')
  }
]
const display2 = [
  {
    title: 'South Indian',
    image: require('../assets/images/southIndia.jpeg')
  },
  {
    title: 'Chinese',
    image: require('../assets/images/chinese.jpg')
  },
  {
    title: 'North Indian',
    image: require('../assets/images/fastfood.jpg')
  }
]
const display = [display1, display2];
interface IHome {
  messList: PickKey<IMessListReducer,'list'>
  areaId:number,
  location:{lat:number,lng:number}
  cartItems:PickKey<ICartReducer,'cartItems'>
  activeMess:PickKey<IMessListReducer,'activeMess'>
}
const Home = (props:IHome)  => {
  const {areaId,messList,location,cartItems,activeMess} = props
  
  // const [newList,setList] = useState([])
  // React.useEffect(()=>{
  //   const newList = messList.shift()
  //   setList(newList)
  // },[messList])
  // console.log('>',newList,messList)
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
  const renderBanner = (data:{item:{image:any},index:number})=>{
    return (
      <View style={{height:screenDimensions.height*.2,borderRadius:10,width:'100%'}}>
        <Image style={{alignSelf:'center',height:screenDimensions.height*.2,borderRadius:10,width:'100%'}} resizeMode={'contain'} source={data.item.image} />
      </View>
    )
  }
  const renderImages = (data:any)=>{
    return (
      <View style={{flexDirection:'row',justifyContent:'space-between',height:screenDimensions.height*.18}}>
        {
          data.item.map((slide,idx)=>{
            return (
              <ImageOverlay
                source={slide.image}
                // title={slide.title}
                contentPosition='center'
                // titleStyle={{color:'#111'}}
                containerStyle={{width:'30%',alignContent:'flex-start'}}
                height={screenDimensions.height*0.2}
                overlayColor="#111"
                overlayAlpha={0.2}>
                  <View>
                  <AppText style={{marginBottom:20,alignSelf:'flex-start'}} type={['white','bold']}>{slide.title}</AppText>
                  </View>
                  
                </ImageOverlay>
            )
          })
        }
        
      </View>
    )
  }
  const [filterModal,toggleModal] = React.useState(false)
  return (
    <>
      <SafeAreaView style={{flex:1}}>
        <ScrollView contentContainerStyle={{paddingHorizontal:`${small}%`}}>
          <View style={{marginTop:`${base}%`}}> 
            <Carousel
              data={banner}
              renderItem={data => renderBanner(data)}
              firstItem={0}
              sliderWidth={screenDimensions.width}
              itemWidth={screenDimensions.width-100}
              inactiveSlideScale={0.8}
              inactiveSlideOpacity={0.4}
              swipeThreshold={0}
              loop={true}
              autoplay={true}
              autoplayDelay={0}
              autoplayInterval={5000}
              layout={'default'}
              activeAnimationType={'spring'}
            />
          </View>
          <MessCard cartItems={cartItems} activeMess={activeMess} theme={theme}  M={messList[0]}/>
          <View style={{marginTop:`${base}%`}}> 
          <Carousel
            data={display}
            renderItem={data => renderImages(data)}
            firstItem={0}
            sliderWidth={screenDimensions.width}
            itemWidth={screenDimensions.width}
            inactiveSlideScale={0.8}
            inactiveSlideOpacity={0.4}
            swipeThreshold={0}
            loop={true}
            autoplay={true}
            autoplayDelay={0}
            autoplayInterval={5000}
            layout={'default'}
            activeAnimationType={'spring'}
            // onSnapToItem={index => setIndex(index)}
          />
          </View>
          <FlatList showsVerticalScrollIndicator={false} keyExtractor={(item,i)=> `${i}`} data={messList} renderItem={({item,index})=>{return <MessCard activeMess={activeMess} cartItems={cartItems} theme={theme} M={item} key={index} />}} />
          {/* {
              cartItems.length > 0 && <Footer cartItems={cartItems} />
          } */}
        
          </ScrollView>
          {
              cartItems.length > 0 && <Footer cartItems={cartItems} />
          }
        <FilterModal visible={filterModal} closeModal={()=> toggleModal(false)} />
      </SafeAreaView>
    </>
  );
};
const mapStateToProps = ((state:IStore)=>{
  return {
    areaId:state.userReducer.areaId,
    location:state.userReducer.location,
    messList:state.messListReducer.list,
    cartItems:state.cartReducer.cartItems,
    activeMess:state.messListReducer.activeMess
  }
})
export default connect(mapStateToProps,{})(Home)
interface IMessCard {
  cartItems:PickKey<ICartReducer,'cartItems'>
  M:ISingleMess
  activeMess:PickKey<IMessListReducer,'activeMess'>
  theme:ITheme
}
const MessCard =(props:IMessCard)=>{
  const {M,activeMess,cartItems,theme}=props
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const goToMess = () =>{
    if(cartItems.length>0){
      if(M.id === activeMess.id){
        dispatch({type:SET_ACTIVE_MESS,payload:M})
        navigation.navigate('SingleMess')
      }else{
        Alert.alert(
          'Items already in cart',
          'You already have items in your cart from other mess.',
          [
            // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            {text: 'Checkout', onPress: () => navigation.navigate('Cart'), style: 'cancel'},
            {text: 'Clear cart and continue?', onPress: () => clearCart()},
          ],
          { cancelable: false }
        )
      }
    }else{
      dispatch({type:SET_ACTIVE_MESS,payload:M})
      navigation.navigate('SingleMess')
    }   
  }
  const clearCart = () =>{
    dispatch({type:EMPTY_CART})
    dispatch({type:SET_ACTIVE_MESS,payload:M})
    navigation.navigate('SingleMess')
  }
  return (
    <TouchableOpacity onPress={()=>goToMess()}  style={{backgroundColor:'#fff',borderRadius:8,
    // paddingVertical:`${base}%`,
    paddingLeft:`${base}%`,flexDirection:'row',marginTop:`${small}%`}}>
      <View style={{flex:0.2}}>
        <Image source={require('../assets/images/tiffin.png')} resizeMode='contain' style={{width:'90%',height:screenDimensions.height*.15}} />
      </View>
      <View style={{flex:0.8}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',paddingRight:`${small}%`}}>
            <AppText type={['bold']}>
              {M.shop_name}
            </AppText>
            <Label textStyle={{fontWeight:'normal'}} type='success' text={'4.0'} />
        </View>
        <AppText type={['small']}>Fast Food, South Indian, Rolls...</AppText>
        <AppText style={{marginVertical:`${small}%`}} type={['small']}>{rupee}200 per person | 30 mins</AppText>
        <AppText type={['small','warning']}>40% Off - Use Code FOODBUDD</AppText>
    </View>
  </TouchableOpacity>
  )
}
