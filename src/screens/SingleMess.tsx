import React, { useState } from 'react'
import { Dimensions, Image, View, StyleSheet,Text, TouchableOpacity, Platform, UIManager, LayoutAnimation } from 'react-native'
import { AppText } from '../components/AppText'
import { Label } from '../components/Label'
import { base, theme, small, tiny, large, xLarge } from '../config/Theme'
import { FoodIcon, CartIcon } from '../utils/icons'
import { ScrollView } from 'react-native-gesture-handler'
import { ToggleButton, Switch, List, Menu } from 'react-native-paper'
import { AuthButton } from './Signup'
import { useNavigation } from '../hooks/useNavigation'
import { menu } from '../config/constants'
import { chunk } from '../utils/chunkArray'
import { AddButton, IncDecButton } from '../components/Buttons'
import { connect, useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Redux/cart/actions'
import { IStore } from '../Redux/store'
import { ICartReducer } from '../Redux/cart/reducer'
import { Icon } from 'react-native-elements'
import { TabNames } from '../config/routes'
import { IMessListReducer } from '../Redux/cafeList/reducer'
const window = Dimensions.get('window')
const cuisines=['Indian','Chinese']
const services=['Dining','Tiffin']
const starters = ['Veg Manchurian','Veg Chilly','Veg 65','veg Manchurian','Veg Chilly','Veg 65','veg Manchurian','Veg Chilly','Veg 65']
const screenDimensions = Dimensions.get('window');
if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
const timings = ['10am - 11am','11am - 12pm','12pm - 1pm','1pm - 2pm','2pm - 3pm','3pm - 4pm','4pm - 5pm','5pm - 6pm']
interface ISingleMess {
    cartItems:PickKey<ICartReducer,'cartItems'>
    activeMess:PickKey<IMessListReducer,'activeMess'>
}
const SingleMess = (props:ISingleMess)=>{
    const {cartItems,activeMess} = props
    return (
        <View style={{flex:1,justifyContent:'space-between'}}>
            <ScrollView style={{flex:1,paddingHorizontal:`${small}%`}}>
                <NameCard name={activeMess?.shop_name} />
                <Recommended cartItems={cartItems} />
                {/* <Cuisine1 /> */}
            </ScrollView>
            {
                cartItems.length > 0 && <Footer cartItems={cartItems} />
            }
            
        </View>
        
    )
}
export const NameCard = (props:{name:string,inCart?:boolean,address?:string}) =>{
    const {inCart=false} = props
    return (
        <View  style={{
            backgroundColor:'#fff',
            borderRadius:8,
            paddingTop:`${base}%`,
            paddingLeft:`${base}%`,
            flexDirection:'row',
            marginTop:`${small}%`
        }}>
        <View style={{flex:0.2}}>
            <Image source={require('../assets/images/tiffin.png')} resizeMode='contain' style={{width:'80%',height:screenDimensions.height*.10}} />
        </View>
        <View style={{flex:0.8}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <AppText type={['bold']}>
                    {props.name}
                </AppText>
                
                <Image resizeMode='contain' style={{width:20,height:20,marginRight:`${small}%`}}  source={require('../assets/images/veg.png')} />
            </View>
            {
                inCart && <AppText type={['muted']}>{props.address}</AppText>
            }
            {
                !inCart && 
                    <>
                        <AppText type={['small']} style={{marginVertical:`${small}%`}}>
                            {
                                cuisines.map((C,i)=>{
                                if(i+1===cuisines.length){
                                    return ` ${C}`
                                }else if(i===0){
                                    return `${C},`
                                }else{
                                    return ` ${C},`
                                }
                                })
                            }
                        </AppText>
                        <View style={{flexDirection:'row',marginBottom:`${base}%`}} >
                            <FoodIcon color={theme.colors.theme} size={18}/>
                            <AppText type={['success','small']}>
                            {' '}
                            {
                                services.map((S,index)=>{
                                if(index+1===services.length){
                                    return `& ${S}`
                                }else if(index===services.length-2){
                                    return `${S} `
                                }else {
                                    return `${S}, `
                                }
                                })
                            }
                            </AppText>
                        </View>
                    </>
            }
            
        </View>
    </View>
    )
}
export const Footer = (props:{cartItems:{quantity:number}[]})=>{
    const {cartItems} = props
    const navigation = useNavigation()
    const [count,setCount] = useState(0)
    React.useEffect(()=>{
        const quants = cartItems.map(C=>C.quantity)
        const number = quants.reduce((a, b) => a + b, 0)
        setCount(number)
    },[cartItems])
    return (
        <TouchableOpacity onPress={()=>navigation.navigate(TabNames.cart)} style={{backgroundColor:theme.colors.theme,flexDirection:'row',height:window.height*0.05,alignItems:'center',paddingHorizontal:`${base}%`,justifyContent:'space-between'}}>
            <AppText type={['white']}>{count} items</AppText>
            <View style={{flexDirection:'row'}}>
                <Icon name='handbag' type='simple-line-icon' color={'#fff'} size={18}/>
                <AppText type={['white']}>{' '}View Cart</AppText>
            </View>
        </TouchableOpacity>
    )
}
const mapStateToProps = ((state:IStore)=>{
    return {
        cartItems:state.cartReducer.cartItems,
        activeMess:state.messListReducer.activeMess
    }
})
export default connect(mapStateToProps,{})(SingleMess)

const Recommended = (props:any) =>{
    const [status,setStatus] = React.useState(false)
    const chunks = chunk(menu.data.menus,2)
    return (
        <View style={{backgroundColor:'#fff',paddingHorizontal:`${small}%`,marginVertical:`${base}%`}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:`${small}%`,alignItems:'center'}}>
                <AppText type={['bold']}>Recommended</AppText>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <AppText type={['small']}>VEG ONLY</AppText>
                    <Switch
                        color={theme.colors.theme}
                        value={status}
                        onValueChange={() =>
                            setStatus(!status)
                        }
                    />
                </View>
            </View>
            {
                chunks.map((chunk,idx)=>{
                    return (
                        <View key={idx} style={{flexDirection:'row',flex:1,justifyContent:chunk.length===1?'flex-start':'space-between'}}>
                            {chunk.map((M,i)=>{
                                return <SingleItem cartItems={props.cartItems} menu={M} key={i} />
                            })}
                        </View>
                    )
                   
                })
            }
        </View>
    )
}
interface ISingleItem {
    menu: {
        available: number
        id: number
        images: string
        name: string
        price: number
        veg: number
        vendor_id: number
    }
    cartItems:PickKey<ICartReducer,'cartItems'>
}
const SingleItem = (props:ISingleItem) =>{
    const dispatch = useDispatch()    
    const {menu,cartItems} = props
    const [inCart,setInCart] = useState([])
    React.useEffect(()=>{
        const cart = props.cartItems.find(C=>C.menuID===menu.id)
        setInCart(cart)
    },[props.cartItems])
    const onItemIncrement = (count:number)=>{
        const remove = cartItems.filter(C=>C.menuID!==menu.id)
        const newItem = {
            menuID:menu.id,
            quantity:count,
            name:menu.name,
            price:menu.price
        }
        dispatch(addToCart([newItem,...remove]))
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
    const onItemDecrement = (count:number)=>{
        const remove = cartItems.filter(C=>C.menuID!==menu.id)
        const newItem = {
            menuID:menu.id,
            quantity:count,
            name:menu.name,
            price:menu.price
        }
        if(count===0){
            dispatch(addToCart(remove))
        }else{
            dispatch(addToCart([newItem,...remove]))
            console.log([newItem,...remove])
        }
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
    return (
        <View style={styles.menuContainer}>
                <Image source={require('../assets/images/tiffin.png')} style={styles.menuImage} />
                <View style={{flexDirection:'row',marginTop:`${small}%`}}>
                    <Image resizeMode='contain' style={{width:20,height:20}}  source={require('../assets/images/veg.png')} />
                    <AppText type={['small']}> {props.menu.name}</AppText>
                </View>
                {/* <AppText style={{marginTop:`${small}%`}} type={['xSmall']}>1 Aalu Sabji, Dal, Rice, 2 Chapati</AppText> */}
                {/* price Container */}
                <View style={{marginTop:`${xLarge}%`}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <AppText>Rs. {props.menu.price}</AppText>
                        {
                            !!inCart ? 
                                <IncDecButton onIncrement={(c)=>onItemIncrement(c)} onDecrement={(c)=>onItemDecrement(c)} count={inCart?.quantity} /> 
                            :
                                <AddButton onPress={()=>{dispatch(addToCart({menuID:props.menu.id,quantity:1,name:props.menu.name,price:props.menu.price}));LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);}} title='Add' />
                        }
                        
                    </View>
                    <AppText style={{textDecorationLine:'line-through'}} type={['small']}>Rs. 100</AppText>
                </View>
        </View>
    )
}
const Cuisine1 = () =>{
    const [status,setStatus] = React.useState(false)
    const [expanded,setExpanded] = React.useState(false)
    return(
        <View style={{backgroundColor:'#fff',paddingHorizontal:`${small}%`,marginVertical:`${base}%`}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:`${small}%`,alignItems:'center'}}>
                <AppText type={['bold']}>Indian</AppText>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <AppText type={['small']}>VEG ONLY</AppText>
                    <Switch
                        color={theme.colors.theme}
                        value={status}
                        onValueChange={() =>
                            setStatus(!status)
                        }
                    />
                </View>
            </View>
            <List.Accordion
                title="Veg Starters"
                description={'12 Items'}
                left={props => <></>}
                titleStyle={{color:theme.colors.theme}}
                expanded={expanded}
                onPress={()=>{
                    // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                    setExpanded(!expanded)
                }}
                >
                    {
                        starters.map((S,idx)=>{
                            return (
                                <View key={idx} style={{flexDirection:'row',flex:1,paddingLeft:0,alignItems:'center',marginVertical:`${base}%`}}>
                                    <View style={{flex:.1}}>
                                        <Image resizeMode='contain' style={{width:30,height:30}}  source={require('../assets/images/veg.png')} />
                                    </View>
                                    <View style={{flex:0.9}}>
                                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                            <AppText>{S}</AppText>
                                            <AddButton />
                                        </View>
                                        <AppText>
                                            <AppText style={{textDecorationLine:'line-through'}} type={['small']}>Rs.100</AppText>
                                            <AppText>  Rs. 80</AppText>
                                        </AppText>
                                    </View>
                                </View>
                            )
                        })
                    }
                    
                </List.Accordion>
        </View>
    )
}

const styles = StyleSheet.create({
    menuImage:{width:'100%',height:screenDimensions.height * 0.15,},
    menuContainer:{
        flex:0.48,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        marginVertical:xLarge,
        // backgroundColor:'cyan'
    }
})

