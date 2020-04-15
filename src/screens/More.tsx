import { AppText } from "../components/AppText"
import React from "react"
import { View, ScrollView, TouchableOpacity } from "react-native"
import { base, small } from "../config/Theme"
import { AddressIcon, ChevronRight, HistoryIcon } from "../utils/icons"
import { useNavigation } from "../hooks/useNavigation"
import { Avatar, Divider } from "react-native-elements"

export const More = ()=>{
    const {navigate} = useNavigation()
    return (
        <ScrollView style={{flex:1,backgroundColor:'#fff'}}>
            
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',paddingHorizontal:`${base}%`,paddingVertical:`${small}%`,justifyContent:'space-between'}}>
            <View style={{flexDirection:'row'}}>
            <Avatar
                size='medium'
                rounded
                source={{
                    uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}
                />
            <View style={{paddingHorizontal:`${small}%`}}>
                <AppText>Lisa Guha</AppText>
                <AppText>example@example.com</AppText>
            </View>
            </View>
            <ChevronRight color={'#111'} size={20}/>
            </TouchableOpacity>
            <Divider style={{ backgroundColor: '#ccc',marginTop:`${small}%`,height:1 }}/>
            <TouchableOpacity onPress={()=>navigate('ManageAddress')} style={{paddingHorizontal:`${base}%`,paddingVertical:`${small}%`,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <HistoryIcon color={'#666'} size={18} />
                    <AppText type={['bold']}>  Your Past Orders</AppText>
                </View>
                <ChevronRight color={'#111'} size={20}/>
            </TouchableOpacity>
            <Divider style={{ backgroundColor: '#ccc',marginVertical:`${small}%`,height:1 }}/>
            <TouchableOpacity onPress={()=>navigate('ManageAddress')} style={{paddingHorizontal:`${base}%`,paddingVertical:`${small}%`,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <AddressIcon color={'#666'} size={18} />
                    <AppText type={['bold']}>  Manage Address</AppText>
                </View>
                <ChevronRight color={'#111'} size={20}/>
            </TouchableOpacity>
            <Divider style={{ backgroundColor: '#ccc',marginVertical:`${small}%`,height:1 }}/>
        </ScrollView>
    )
}