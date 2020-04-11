import { ADD_TO_CART, EMPTY_CART, SET_PATH } from "./types";

export interface ICartReducer {
    cartItems : {menuID:number,quantity:number}[],
    through:string

}
const initialCart:ICartReducer = {
    cartItems:[],
    through:''
}
export default (
    state: ICartReducer = initialCart,
    {type, payload}: {type: string; payload: any},
  ) => {
    switch (type) {
      case ADD_TO_CART:
        return {
          ...state,
          cartItems:Array.isArray(payload)  ? payload : [payload,...state.cartItems] 
        }
      case EMPTY_CART:
        return {
          ...state,
          cartItems:[]
        }
      case SET_PATH:
        return {
          ...state,
          through:payload
        }
      default:
        return state;
    }
  };