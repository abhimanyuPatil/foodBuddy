import React from 'react'
import { Modal, View, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import { Header, Icon, Button } from 'react-native-elements'
import { AppText } from './AppText'
import { base, small, theme } from '../config/Theme'
import { sortOptions, Cuisines, messType } from '../config/constants'
import { RadioUnchecked, CheckboxUnchecked } from '../utils/icons'
import { SafeAreaView } from 'react-navigation'
const window = Dimensions.get('window')
interface IFilterModal{
    visible:boolean
    closeModal:Function
}
export const FilterModal = (props:IFilterModal)=>{
    const {visible,closeModal} = props
    return (
        <Modal visible={visible} animationType='slide' onRequestClose={()=>{return closeModal()}} onDismiss={()=>{return closeModal()}} >
            <SafeAreaView style={{flex:1}}>
                <Header 
                    containerStyle={styles.header} 
                    leftComponent={
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity onPress={()=>{return closeModal()}}>
                                <Icon name='close' type='antdesign' size={26} />
                            </TouchableOpacity>
                            <AppText type={['large']}>FILTER</AppText>
                        </View>
                    }  
                    rightComponent={
                        <TouchableOpacity>
                            <AppText type={['theme']}>Reset</AppText>      
                        </TouchableOpacity>
                    }
                />
                <ScrollView style={{backgroundColor:'#eee'}}>
                    <MessType />
                    <SortBox />
                    <CuisinesBox/>
                </ScrollView>
                <Button
                    containerStyle={{}}
                    buttonStyle={{
                        borderColor: '#999',
                        backgroundColor: theme.colors.theme
                    }}
                    titleStyle={{color: theme.colors.white}}
                    title="Apply"
                    onPress={() => {
                    }}
                />
            </SafeAreaView>
        </Modal>
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

const SortBox = ()=>{
    return (
        <View style={{padding:`${base}%`,backgroundColor:'#fff',marginTop:`${base}%`}}>
            <AppText>Sort</AppText>
            {
                sortOptions.map((S,idx)=>{
                    return(
                        <TouchableOpacity key={idx} style={{flexDirection:'row',borderBottomColor:'#ddd',borderBottomWidth:0.8,justifyContent:'space-between'}}>
                            <AppText style={{marginVertical:`${small}%`}}>{S.label}</AppText>
                            <RadioUnchecked containerStyle={{marginVertical:`${small}%`}} size={22} color={'#111'} />
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}
const MessType = () =>{
    return (
        <View style={{padding:`${base}%`,backgroundColor:'#fff',marginTop:`${base}%`}}>
            <AppText>Show mess with</AppText>
            {
                messType.map((C,idx)=>{
                    return(
                        <TouchableOpacity key={idx} style={{flexDirection:'row',borderBottomColor:'#ddd',borderBottomWidth:0.8,justifyContent:'space-between'}}>
                            <AppText style={{marginVertical:`${small}%`}}>{C}</AppText>
                            <CheckboxUnchecked containerStyle={{marginVertical:`${small}%`}} size={22} color={'#111'} />
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}
const CuisinesBox = () =>{
    return (
        <View style={{padding:`${base}%`,backgroundColor:'#fff',marginTop:`${base}%`}}>
            <AppText>Cuisines</AppText>
            {
                Cuisines.map((C,idx)=>{
                    return(
                        <TouchableOpacity key={idx} style={{flexDirection:'row',borderBottomColor:'#ddd',borderBottomWidth:0.8,justifyContent:'space-between'}}>
                            <AppText style={{marginVertical:`${small}%`}}>{C}</AppText>
                            <CheckboxUnchecked containerStyle={{marginVertical:`${small}%`}} size={22} color={'#111'} />
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}