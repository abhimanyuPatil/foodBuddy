import { IStore } from "../Redux/store"
import { connect } from "react-redux"
import React from 'react'
import { IUser } from "../Redux/user/reducer"
import { View } from "react-native"
import { AppText } from "../components/AppText"
import { ThemeButton } from "../components/Buttons"
import { base, large, xLarge, small } from "../config/Theme"
import { useFetch } from "use-fetch-lib"
import { Loader } from "../components/Loader"
interface IManageAddress{
    addressList:PickKey<IUser,'address'>
}
const ManageAddress = (props:IManageAddress)=>{
    const {addressList} = props
    // const [data,status] = useFetch({
    //     url:'',
    //     method:'get',
    //     shouldDispatch:true
    // })
    return (
        <>
            
        {/* <View style={{alignItems:'center',flex:1,justifyContent:'center'}}><Loader/></View> */}
            
        {
            addressList.length === 0 ?
                <View style={{flex:1,justifyContent:'center',alignItems:'center',paddingHorizontal:`${xLarge}%`,backgroundColor:'#fff'}}>
                    <AppText>You don't have any saved address.</AppText>
                    <ThemeButton containerStyle={{marginTop:`${small}%`}} inverted title={"Add Address"} />
                </View>
            :
                <View>
                    <AppText>SAVED ADDRESSES</AppText>
                </View>
        }
        </>
    )
}
const mapStateToProps = ((state:IStore)=>{
    return {
        addressList:state.userReducer.address
    }
})
export default connect(mapStateToProps,{})(ManageAddress)