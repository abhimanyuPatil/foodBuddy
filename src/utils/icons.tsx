import { Icon, IconProps } from "react-native-elements"
import React from 'react'
interface IIcon{
    color:string
    size:number
}
export const HomeIcon = (props:IconProps)=>{
    const {size,color,...rest} = props
    return (
        <Icon name="home" type="entypo" size={props.size} color={props.color}  {...rest} />
    )
}

export const HomeIconO = (props:IconProps)=>{
    const {size,color,...rest} = props
    return (
        <Icon name="home-outline" type="material-community" size={props.size} color={props.color}  {...rest} />
    )
}
export const SearchIcon = (props:IconProps)=>{
    const {size,color,...rest} = props
    return (
        <Icon name='search1' type={'antdesign'} size={props.size} color={props.color} {...rest}/>
    )
}

export const CartIcon = (props:IconProps)=>{
    const {size,color,...rest} = props
    return (
        <Icon name='shopping-basket' type='entypo' size={props.size} color={props.color}  {...rest} />
    )
}

export const AccountIcon = (props:IconProps)=>{
    const {size,color,...rest} = props
    return (
        <Icon name={'account-star'} type='material-community'  size={props.size} color={props.color} {...rest}/>
    )
}

export const OffersIcon = (props:IconProps)=>{
    const {size,color,...rest} = props
    return (
        <Icon name='brightness-percent' type='material-community' size={props.size} color={props.color} {...rest}/>
    )
}

export const HeaderBack = (props:IconProps)=>{
    const {size,color,...rest} = props
    return (
        <Icon name='arrow-back' type='material' size={props.size} color={props.color} {...rest}/>
    )
}

export const ChevronDown = (props:IconProps)=>{
    const {size,color,...rest} = props
    return (
        <Icon name='ios-arrow-down' type='ionicon' size={props.size} color={props.color} {...rest}/>
    )
}

export const ChevronLeft = (props:IconProps)=>{
    const {size,color,...rest} = props
    return (
        <Icon name='chevron-left' type='entypo' size={props.size} color={props.color} {...rest}/>
    )
}

export const ChevronRight = (props:IconProps)=>{
    const {size,color,...rest} = props
    return (
        <Icon name='chevron-right' type='entypo' size={props.size} color={props.color} {...rest}/>
    )
}                


export const RadioUnchecked = (props:IconProps)=>{
    const {size,color,...rest} = props
    return <Icon name='checkbox-blank-circle-outline' type='material-community' size={props.size} color={props.color}  {...rest}/>
}

export const RadioChecked = (props:IconProps)=>{
    const {size,color,...rest} = props
    return <Icon name='checkbox-marked-circle' type='material-community' size={props.size} color={props.color}  {...rest}/>
}

export const CheckboxUnchecked = (props:IconProps)=>{
    const {size,color,...rest} = props
    return <Icon name='checkbox-blank-outline' type='material-community' size={props.size} color={props.color}  {...rest}/>
}

export const CheckboxChecked = (props:IconProps)=>{
    const {size,color,...rest} = props
    return <Icon name='checkbox-marked' type='material-community' size={props.size} color={props.color}  {...rest}/>
}

export const LocationIcon = (props:IconProps)=>{
    const {size,color,...rest} = props
    return <Icon name='location-pin' type='entypo' size={props.size} color={props.color}  {...rest}/>
}

export const LocationIconO = (props:IconProps)=>{
    const {size,color,...rest} = props
    return <Icon name='location' type='octicon' size={props.size} color={props.color}  {...rest}/>
}

export const EditIcon = (props:IconProps)=>{
    const {size,color,...rest} = props
    return <Icon name='edit'  size={props.size} color={props.color}  {...rest}/>
}

export const FilterIcon = (props:IconProps)=>{
    const {size,color,...rest} = props
    return <Icon name='settings' type='octicon'  size={props.size} color={props.color}  {...rest}/>
}

export const FoodIcon = (props:IconProps)=>{
    const {size,color,...rest} = props
    return <Icon name='food' type='material-community'  size={props.size} color={props.color}  {...rest}/>
}

export const AddressIcon = (props:IconProps)=>{
    const {size,color,...rest} = props
    return <Icon name='address-card-o' type='font-awesome'  size={props.size} color={props.color}  {...rest}/>
}

export const TimerIcon = (props:IconProps)=>{
    const {size,color,...rest} = props
    return <Icon name='timer'  size={props.size} color={props.color}  {...rest}/>
}

export const CloseIcon = (props:IconProps)=>{
    const {size,color,...rest} = props
    return <Icon name='close' type='antdesign'  size={props.size} color={props.color}  {...rest}/>
}

export const OfficeIcon = (props:IconProps)=>{
    const {size,color,...rest} = props
    return <Icon name='building' type='font-awesome'  size={props.size} color={props.color}  {...rest}/>
}

export const OfficeIconO = (props:IconProps)=>{
    const {size,color,...rest} = props
    return <Icon name='building-o' type='font-awesome'  size={props.size} color={props.color}  {...rest}/>
}

export const HistoryIcon = (props:IconProps)=>{
    const {size,color,...rest} = props
    return <Icon name='history' type='material-community'  size={props.size} color={props.color}  {...rest}/>
}