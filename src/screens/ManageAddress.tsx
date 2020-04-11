import { IStore } from "../Redux/store"
import { connect } from "react-redux"
import React from 'react'
import { IUser } from "../Redux/user/reducer"
import { View, Alert } from "react-native"
import { AppText } from "../components/AppText"
import { ThemeButton } from "../components/Buttons"
import { base, large, xLarge, small, theme } from "../config/Theme"
import { useFetch } from "use-fetch-lib"
import { Loader } from "../components/Loader"
import { useNavigation } from "../hooks/useNavigation"
import { HomeIcon, OfficeIcon, LocationIcon } from "../utils/icons"
import { PopupMenu } from "../components/PopupMenu"
import LottieView from 'lottie-react-native';

interface IManageAddress{
    addressList:PickKey<IUser,'address'>
}
const ManageAddress = (props:IManageAddress)=>{
    const {addressList} = props
    console.log('addr',addressList)
    const navigation = useNavigation()
    // const [data,status] = useFetch({
    //     url:'',
    //     method:'get',
    //     shouldDispatch:true
    // })
    const confirm = (id:number)=>{
        Alert.alert(
            'Delete Address',
            'Are you sure you want to delete this address?',
            [
              {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'Yes', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
    }
    const action = (value:string,idx:number)=>{
        if(value==='delete'){
            confirm(idx)
        }else{
            navigation.navigate('AddAddress')
        }
    }
    return (
        <>
        {
            addressList.length === 0 ?
                <View style={{flex:1,justifyContent:'center',alignItems:'center',paddingHorizontal:`${xLarge}%`,backgroundColor:'#fff'}}>
                    <LottieView 
                        source={require('../assets/lottie/location.json')} 
                        autoPlay
                        loop={true}
                        style={{ width: '40%',}}/>
                    <AppText>You don't have any saved address.</AppText>
                </View>
            :
                <View style={{flex:1}}>
                    <AppText style={{marginVertical:`${small}%`,marginLeft:`${small}%`}}>YOUR SAVED ADDRESSES</AppText>
                    {
                        addressList.map((add,idx)=>{
                            return (
                                <View style={{backgroundColor:'#fff',borderBottomWidth:0.8,borderColor:'#ccc',paddingVertical:`${small}%`,paddingHorizontal:`${base}%`}}>
                                    <View style={{flexDirection:'row'}}>
                                        <View style={{flex:1,flexDirection:'row'}}>
                                            {
                                                add.type==='home' ? 
                                                    <HomeIcon size={20} color={theme.colors.theme}/> 
                                                : add.type==='office' ? 
                                                    <OfficeIcon size={20} color={theme.colors.theme}/> 
                                                : <LocationIcon size={20} color={theme.colors.theme}/>
                                            }
                                            <AppText> {add.address_line1}</AppText>
                                        </View>
                                        <PopupMenu onItemSelect={(value)=>action(value,idx)} options={[{label:'Edit',value:'edit'},{label:'Delete',value:'delete'}]} />
                                        
                                    </View>
                                    <AppText style={{marginTop:`${small}%`}}>{add.address_line2}, {add.landmark}</AppText>
                                    {
                                            idx===0 && <AppText style={{marginTop:`${small}%`}} type={['xSmall']}>This is your default address</AppText>
                                        }
                                </View>
                            )
                        })
                    }
                </View>
        }
                            <ThemeButton buttonStyle={{width:'100%'}} onPress={()=>{navigation.navigate('AddAddress')}} containerStyle={{width:'100%'}} title={"Add Address"} />

        </>
    )
}
const mapStateToProps = ((state:IStore)=>{
    return {
        addressList:state.userReducer.address
    }
})
export default connect(mapStateToProps,{})(ManageAddress)
                                        