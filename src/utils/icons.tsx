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

export const ChevronDown = (props:IconProps)=>{
    const {size,color,...rest} = props
    return (
        <Icon name='ios-arrow-down' type='ionicon' size={props.size} color={props.color} {...rest}/>
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
