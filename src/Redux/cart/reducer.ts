import { ADD_TO_CART } from "./types";

export interface ICartReducer {
    cartItems : {menuID:number,quantity:number}[]
}
const initialCart:ICartReducer = {
    cartItems:[]
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
      default:
        return state;
    }
  };