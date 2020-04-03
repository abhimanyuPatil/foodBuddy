import { res } from "../../config/constants";
import { SET_ACTIVE_MESS } from "./types";

interface ISingleMess{
  "id": number,
  "shop_name": string
  "address": string
  "area_id": number
  "district_id": number
  "city_id": number
  "state_id": number
  "country_id": number
  "vendor_type": number
  "food_type": number //[1:veg,2:nonveg,3:both]
  "service_type": number
  "meal_type": number //[1:lunch,2:Dinner,3.Both]
  "max_tiffin": number
  "cost_regular_cust": number
  "cost_rare_cust": number
  "launch_from_hour": string
  "launch_to_hour": string
  "dinner_from_hour": string
  "dinner_to_hour": string
  "country_code": number
  "contact_number": string
  "email": string
  "approval_status": string
  "is_deleted": number
  "is_blocked": number
}
export interface IMessListReducer {
    list : ISingleMess[]
    activeMess:ISingleMess
}
const initialValues:IMessListReducer = {
    list:res.data,
    activeMess:{}
}
export default (
    state: IMessListReducer = initialValues,
    {type, payload}: {type: string; payload: any},
  ) => {
    switch (type) {
      case SET_ACTIVE_MESS:
        return {
          ...state,
          activeMess:payload
        }
      default:
        return state;
    }
  };