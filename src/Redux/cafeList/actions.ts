import { SET_LIST } from "./types"

export const sample = (payload:any)=>{
    return {
        type:SET_LIST,
        payload:payload
    }
}