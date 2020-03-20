import { Icon } from "react-native-elements"
import React from 'react'
interface IIcon{
    color:string
    size:number
}
export const HomeIcon = (props:IIcon)=>{
    return (
        <Icon name="home" type="entypo" size={props.size} color={props.color} />
    )
}
export const SearchIcon = (props:IIcon)=>{
    return (
        <Icon name='search1' type={'antdesign'} size={props.size} color={props.color}/>
    )
}

export const CartIcon = (props:IIcon)=>{
    return (
        <Icon name='shopping-basket' type='entypo' size={props.size} color={props.color}  />
    )
}

export const AccountIcon = (props:IIcon)=>{
    return (
        <Icon name={'account-star'} type='material-community'  size={props.size} color={props.color}/>
    )
}

export const OffersIcon = (props:IIcon)=>{
    return (
        <Icon name='brightness-percent' type='material-community' size={props.size} color={props.color}/>
    )
}

export const ChevronDown = (props:IIcon)=>{
    return (
        <Icon name='ios-arrow-down' type='ionicon' size={props.size} color={props.color}/>
    )
}