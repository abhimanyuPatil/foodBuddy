import React from "react"
import { TouchableOpacity, TouchableOpacityProps, Dimensions, View } from "react-native"
import { AppText } from "./AppText"
import { theme } from "../config/Theme"
import { Icon } from "react-native-elements"
const window = Dimensions.get('window')
export const AddButton = (props:TouchableOpacityProps & {title:string}) => {
    const {title,...rest} = props
    return (
        <TouchableOpacity {...rest} style={{borderWidth:.8,borderColor:theme.colors.theme,height:window.height/21,width:window.width/6,justifyContent:'center',alignItems:'center',borderRadius:20}}>
            <AppText type={['theme']}>{title}</AppText>
        </TouchableOpacity>
    )
}
interface IIncDecButton{
    count:number
    onIncrement:(count:number)=>void
    onDecrement:(count:number)=>void
}
export const IncDecButton = (props: IIncDecButton) => {
    const {count,onDecrement,onIncrement} = props
    return (
        <View  style={{borderWidth:.8,borderColor:theme.colors.theme,height:window.height/25,width:window.width/6,borderRadius:5,justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
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