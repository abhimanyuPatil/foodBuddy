import { ADD_TO_CART } from "./types"

export const addToCart = (payload:any)=>{
    return {
        type:ADD_TO_CART,
        payload:payload
    }
}