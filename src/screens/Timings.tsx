import { AppText } from "../components/AppText"
import React from "react"
import { Modal, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { Label } from "../components/Label"
import { base, theme } from "../config/Theme"
import { Header, Icon } from "react-native-elements"
import { AuthButton } from "./Signup"
const timings = ['11am - 12pm','12pm - 1pm','1pm - 2pm']
const timings1 = ['2pm - 3pm','3pm - 4pm','4pm - 5pm']
const window = Dimensions.get('window')

export const Timings = ()=>{
    return (
        <>
            <Modal visible={true} animationType='slide'>
            <Header 
                    containerStyle={styles.header} 
                    placement={'left'}
                    leftComponent={
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity onPress={()=>{}}>
                                <Icon name='close' type='antdesign' size={26} />
                            </TouchableOpacity>
                            <AppText type={['large']}>Time Slot</AppText>
                        </View>
                    }  
                    rightComponent={
                        <TouchableOpacity>
                            <AppText type={['theme']}>Reset</AppText>      
                        </TouchableOpacity>
                    }
                />
                <View style={{justifyContent:'space-between',height:window.height*0.8}}>
                    <View>
                        <View style={{flexDirection:'row',display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',marginVertical:`${base}%`}}>
                        {
                            timings.map((T,idx)=>{
                                return (
                                    <Label ViewStyle={{width:'30%'}}  type={'theme'} inverted  text={T} />
                                )
                            })
                        }
                        </View>
                        <View style={{flexDirection:'row',display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
                            {
                                timings1.map((T,idx)=>{
                                    return (
                                        <Label  ViewStyle={{width:'30%'}} type={'theme'} inverted  text={T} />
                                    )
                                })
                            }
                        </View>
                    </View>
                    <AuthButton />
                </View>
               
                
                <View style={{position:'absolute',width:'100%',bottom:0,height:window.height*0.07,backgroundColor:theme.colors.theme,flexDirection:'row',paddingHorizontal:`${base}%`,justifyContent:'space-between',alignItems:'center'}}>
                    <AppText type={['white']}>1 item | Rs. 80</AppText>
                    <View style={{flexDirection:'row'}}>
                        <AppText type={['white']}>View Cart  </AppText>
                        <Icon name='shopping-bag' type='feather' size={20} color={'#fff'} />
                    </View>
                </View>
            </Modal>
        </>
    )
}
const styles = StyleSheet.create({
    header:{
        height:window.height*0.08,
        backgroundColor:'#fff',
        alignItems:'center',
        paddingTop: 0,
        margin: 0,    
    }
})
