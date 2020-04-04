import { AppText } from "../components/AppText"
import React from "react"
import { View, ScrollView, TouchableOpacity } from "react-native"
import { base, small } from "../config/Theme"
import { AddressIcon, ChevronRight } from "../utils/icons"
import { useNavigation } from "../hooks/useNavigation"

export const More = ()=>{
    const {navigate} = useNavigation()
    return (
        <ScrollView>
            <TouchableOpacity onPress={()=>navigate('ManageAddress')} style={{paddingHorizontal:`${base}%`,paddingVertical:`${small}%`,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <View style={{flexDirection:'row'}}>
                    <AddressIcon color={'#666'} size={24} />
                    <AppText>  Manage Address</AppText>
                </View>
                <ChevronRight color={'#111'} size={24}/>
            </TouchableOpacity>
        </ScrollView>
    )
}