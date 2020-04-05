import React from "react"
import { TouchableOpacity, TouchableOpacityProps, Dimensions, View, ViewStyle } from "react-native"
import { AppText } from "./AppText"
import { theme } from "../config/Theme"
import { Icon, Button, ButtonProps } from "react-native-elements"
const window = Dimensions.get('window')
export const AddButton = (props:TouchableOpacityProps & {title:string}) => {
    const {title,...rest} = props
    return (
        <TouchableOpacity {...rest} style={{borderWidth:.8,borderColor:theme.colors.theme,height:window.height/22.5,width:window.width/7,justifyContent:'center',alignItems:'center',borderRadius:10}}>
            <AppText type={['theme','small']}>{title}</AppText>
        </TouchableOpacity>
    )
}
interface IIncDecButton{
    count:number
    onIncrement:(count:number)=>void
    onDecrement:(count:number)=>void
    containerStyle:ViewStyle
}
export const IncDecButton = (props: IIncDecButton) => {
    const {count,onDecrement,onIncrement,containerStyle} = props
    return (
        <View  style={[
            {borderWidth:.8,borderColor:theme.colors.theme,height:window.height/25,width:window.width/6,borderRadius:5,justifyContent:'space-around',flexDirection:'row',alignItems:'center'},
            containerStyle
            ]}>
            <TouchableOpacity onPress={()=>onDecrement(count-1)}>
                <Icon name='minus' type='entypo' size={14} color={theme.colors.error}/>
            </TouchableOpacity>

            <AppText type={['theme']}>{count}</AppText>

            <TouchableOpacity onPress={()=>onIncrement(count+1)}>
                <Icon name='plus' type='entypo' size={14} color={theme.colors.success} />
            </TouchableOpacity>
        </View>
    )
}

export const ThemeButton = (props:ButtonProps & {inverted:boolean})=>{
    const {title,buttonStyle,containerStyle,inverted} = props
    return (
        <Button 
            title={title} 
            containerStyle={[{width:'80%'},containerStyle]}
            buttonStyle={
                [
                    {backgroundColor:inverted ? '#fff' :theme.colors.theme,borderColor:theme.colors.theme},
                    {borderWidth:inverted ? 0.8 : 0},
                    buttonStyle
                ]} 
            titleStyle={{color:inverted ? theme.colors.theme : '#fff'}} 
        />
    )
}