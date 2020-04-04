import { SET_LOCATION } from "./types";

export interface IUser {
    token:string|null
    location:{lat:number,lng:number}
    userName:string
    profilePhoto:string|null
    areaId:number
    address:{type:'home' | 'other' | 'office',address:string,areadId:number,pincode:string}[]
}
const initialValues:IUser = {
    token:'',
    location:{lat:0,lng:0},
    userName:'',
    profilePhoto:'',
    areaId:0,
    address:[]
}
export default (
    state: IUser = initialValues,
    {type, payload}: {type: string; payload: any},
  ) => {
    switch (type) {
      case SET_LOCATION:
        return {
          ...state,
          location:payload
        }
      default:
        return state;
    }
  };