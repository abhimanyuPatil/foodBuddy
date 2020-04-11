import { AppText } from "../components/AppText"
import React, { useState, useEffect } from "react"
import { View, TouchableOpacity } from "react-native"
import { OffersIcon } from "../utils/icons"
import { theme, small, base, tiny } from "../config/Theme"
import { Divider, Input } from "react-native-elements"
import { useNavigation } from "../hooks/useNavigation"
import { connect } from "react-redux"
import { IStore } from "../Redux/store"
interface IOffers{
    through:string
}
const Offers = (props:IOffers)=>{
    return (
        <View style={{flex:1}}>
            {props.through==='Cart' && <Input containerStyle={{backgroundColor:'#fff'}} inputStyle={{fontSize:14}} placeholder='Enter Promo Code' rightIcon={()=><TouchableOpacity><AppText type={['small','theme']}>APPLY</AppText></TouchableOpacity>} />}    
            <AppText style={{marginVertical:`${small}%`,marginLeft:`${small}%`}} type={['bold','large']}>Available Coupons</AppText>
            {
                coupons.map((c,idx)=>{
                    return (
                        <CoupanCard {...c} index={idx} key={idx} />
                    )
                })                

            }
        </View>
    )
}
const mapStateToProps = ((state:IStore)=>{
    return {
        through:state.cartReducer.through
    }
})
export default connect(mapStateToProps,{})(Offers)
const coupons = [
    {
        code:'FOO12',
        title:"Get 12% discount using code FOO12 ",
        desc:"Use code FOO12 and get 12% discount upto Rs. 100 on orders Rs. 200 and above. Offer valid only on Thursdays"
    },
    {
        code:'FH30',
        title:'Get flat Rs. 30 cashback using Freecharge',
        desc: 'Use code FH30 and get flat Rs. 30 cashback on orders Rs. 150 and above using Freecharge'
    }
]
interface ICouponCard{
    code : string
    title:string
    desc:string
}
const CoupanCard = (props:ICouponCard)=>{
    return (
        <View style={{paddingHorizontal:`${base}%`,borderBottomWidth:0.8,paddingVertical:`${small}%`,backgroundColor:'#fff',borderStyle:'dotted',borderRadius:1}}>
            <View style={{borderWidth:1,borderRadius:1,borderStyle:'dashed',backgroundColor:'#f7dc71',flexDirection:'row',alignItems:'center',width:'25%',paddingHorizontal:`${tiny}%`,justifyContent:'space-between',height:30}}>
                <OffersIcon size={18} color={theme.colors.theme} />
                <AppText type={['bold','small']}>{props.code}</AppText>
            </View>
            <AppText type={['bold']} style={{marginTop:`${small}%`}}>
                {props.title}
            </AppText>
            <Divider style={{marginVertical:`${small}%`}} />
            <AppText type={['small']}>
                {props.desc}
            </AppText>
        </View>
    )
}