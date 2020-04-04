import LottieView from 'lottie-react-native';
import React, { useState } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, View, LayoutAnimation, Platform, UIManager, TouchableOpacity, ScrollView } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { AppText } from '../components/AppText';
import { xLarge, small, base, tiny, theme } from '../config/Theme';
import { IMessListReducer } from '../Redux/cafeList/reducer';
import { ICartReducer } from '../Redux/cart/reducer';
import { IStore } from '../Redux/store';
import { NameCard } from './SingleMess';
import { IncDecButton } from '../components/Buttons';
import { addToCart } from '../Redux/cart/actions';
import { OffersIcon, ChevronDown, ChevronLeft } from '../utils/icons';
import { rupee } from '../config/constants';
import { Divider } from 'react-native-elements';
const window = Dimensions.get('window')
interface ICart{
  cartItems:PickKey<ICartReducer,'cartItems'>
  activeMess:PickKey<IMessListReducer,'activeMess'>
}
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const Cart = (props:ICart)  => {
  const {activeMess,cartItems} = props
  const [count,setCount] = useState(0)
    React.useEffect(()=>{
        const quants = cartItems.map(C=>C.quantity*C.price)
        const number = quants.reduce((a, b) => a + b, 0)
        setCount(number)
    },[cartItems])
  return (
      <SafeAreaView style={{flex:1}}>
        {
          cartItems.length === 0 ? 
            <View style={{
              width: '100%',
              paddingHorizontal: `${xLarge}%`,
              alignItems:'center',
              justifyContent:'center',
              height:window.height*.9
            }}> 
              <LottieView 
                source={require('../assets/lottie/cooking.json')} 
                autoPlay
                loop={true}
                style={{ width: '40%',}}/>
              <AppText>Your cart is empty</AppText>
              <AppText>Add something from menu</AppText>
            </View>
          :
          <View style={{justifyContent:'space-between',flex:1}}>
            <ScrollView style={{}}>
              <NameCard inCart={true} address={activeMess.address} name={activeMess.shop_name} />
              <View style={{backgroundColor:'#fff'}}>
                {
                  props.cartItems.map((item,idx)=>{
                    return <Item index={idx} cartItems={props.cartItems} key={idx} item={item} />
                  })
                }
              </View>
              <TouchableOpacity style={{marginVertical:`${small}%`,backgroundColor:'#fff',flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:`${small}%`}}>
                <View style={{flexDirection:'row',alignItems:'center',marginVertical:`${small}%`}}>
                  <OffersIcon color={'#121122'} size={24} />
                  <AppText>  APPLY COUPONS</AppText>
                </View>
                <View style={{transform:[{rotate:'180deg'}],marginVertical:`${base}%`}}>
                  <ChevronLeft color={'#121122'} size={24} />
                </View>
              </TouchableOpacity>
              <BillDetails cartItems={cartItems} />
            </ScrollView>
            <View style={{height:window.height*0.07,flexDirection:'row',alignItems:'center'}}>
              <View style={{flex:1,alignItems:'center',backgroundColor:theme.colors.grey5,height:window.height*0.07}}>
                <AppText type={['bold']}>{rupee}{count+50+50}</AppText>
                <TouchableOpacity><AppText type={['primary','small']}>View Detailed Bill</AppText></TouchableOpacity>
              </View>
              <View style={{flex:1,backgroundColor:theme.colors.theme,height:window.height*0.07,alignItems:'center',justifyContent:'center'}}>
                <AppText type={['white','bold','center']}>PROCEED TO BUY</AppText>
              </View>
            </View>
          </View>
        }

      </SafeAreaView>
  );
};
interface IBill {
  cartItems:PickKey<ICartReducer,'cartItems'>
}
const BillDetails = (props:IBill)=>{
  const {cartItems}=props
  const [count,setCount] = useState(0)
    React.useEffect(()=>{
        const quants = cartItems.map(C=>C.quantity*C.price)
        const number = quants.reduce((a, b) => a + b, 0)
        setCount(number)
    },[cartItems])
  return (
    <View style={{backgroundColor:`#fff`,paddingHorizontal:`${small}%`,paddingTop:`${small}%`}}>
      <AppText type={['bold']}>Bill Details</AppText>
      <View style={{flexDirection:'row',marginVertical:`${tiny}%`}}>
        <AppText style={{flex:0.8}}>Item Total</AppText>
        <AppText style={{flex:0.2}}>{rupee}{count}</AppText>
      </View>
      <View style={{flexDirection:'row',marginVertical:`${tiny}%`}}>
        <AppText style={{flex:0.8}}>Delivery Fee</AppText>
        <AppText style={{flex:0.2}}>{rupee}{`50`}</AppText>
      </View>
      <Divider style={{ backgroundColor: '#ccc' }} />
      <View style={{flexDirection:'row',marginVertical:`${tiny}%`}}>
        <AppText style={{flex:0.8}}>Taxes and Charges</AppText>
        <AppText style={{flex:0.2}}>{rupee}{`50`}</AppText>
      </View>
      <Divider style={{ backgroundColor: '#ccc' }} />
      <View style={{flexDirection:'row',marginVertical:`${tiny}%`}}>
        <AppText type={['bold']} style={{flex:0.8}}>To Pay</AppText>
        <AppText style={{flex:0.2}}>{rupee}{count+50+50}</AppText>
      </View>
    </View>
  )
}
interface IItem {
  item:{"menuID": number, "name": string, "price": number, "quantity": number}
  cartItems:PickKey<ICartReducer,'cartItems'>
  index:number
}
const Item = (props:IItem)=>{
  const {cartItems,item,index} = props
  const dispatch = useDispatch()
  const onItemIncrement = (count:number)=>{
    const remove = cartItems.filter(C=>C.menuID!==item.menuID)
    const newItem = {
        menuID:item.menuID,
        quantity:count,
        name:item.name,
        price:item.price
    }
    remove.splice(index,0,newItem)
    dispatch(addToCart(remove))
    // dispatch(addToCart([newItem,...remove]))
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
}
const onItemDecrement = (count:number)=>{
    const remove = cartItems.filter(C=>C.menuID!==item.menuID)
    const newItem = {
      menuID:item.menuID,
      quantity:count,
      name:item.name,
      price:item.price
    }
    if(count===0){
        dispatch(addToCart(remove))
    }else{
        remove.splice(index,0,newItem)
        dispatch(addToCart(remove))
        // dispatch(addToCart([newItem,...remove]))
    }
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
}
  return (
    <View style={{flexDirection:'row',paddingHorizontal:`${small}%`,marginBottom:`${small}%`,alignItems:'center'}}>
      <View style={{flex:0.7}}>
        <AppText>{props.item.name}</AppText>
      </View>
      <IncDecButton 
        containerStyle={{flex:.2,}}
        onIncrement={(c)=>onItemIncrement(c)} 
        onDecrement={(c)=>onItemDecrement(c)} 
        count={props.item.quantity} 
      />
      <View style={{flex:0.1,alignItems:'flex-end'}}>
      <AppText>{props.item.price*props.item.quantity}</AppText>

      </View>
    </View>
  )
}
const styles = StyleSheet.create({

});

const mapStateToProps = ((state:IStore)=>{
  return{
    cartItems:state.cartReducer.cartItems,
    activeMess:state.messListReducer.activeMess
  }
})
export default connect(mapStateToProps,{})(Cart)