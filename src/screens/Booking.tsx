import React from 'react'
import { AppText } from '../components/AppText'
import { View, Image, Dimensions } from 'react-native'
import { base, small } from '../config/Theme'
const cuisines=['Indian','Chinese']
const screenDimensions = Dimensions.get('window');

export const Booking = () =>{
    return (
        <View  style={{backgroundColor:'#fff',borderRadius:8,}}>
            <View style={{flexDirection:'row',backgroundColor:'cyan'}}>
                <View style={{flex:0.2}}>
                    <Image source={require('../assets/images/tiffin.png')} resizeMode='contain' style={{width:'90%',height:screenDimensions.height*.1}} />
                </View>
                <View style={{flex:0.8}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <AppText>
                            Mom's Kitchen
                        </AppText>
                        <Image resizeMode='contain' style={{width:20,height:20}}  source={require('../assets/images/veg.png')} />
                    </View>
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
                </View>
            </View>
        </View>
    )
}