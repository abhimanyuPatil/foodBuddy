import cartReducer from './cart'
import messListReducer from './cafeList'
import userReducer from './user'
import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import { ICartReducer } from './cart/reducer';
import thunk from 'redux-thunk';
import { IMessListReducer } from './cafeList/reducer';
import { IUser } from './user/reducer';
const appReducer = combineReducers({
    cartReducer,
    messListReducer,
    userReducer
})
export interface IStore{
    cartReducer:ICartReducer
    messListReducer:IMessListReducer
    userReducer:IUser
}
export const USER_LOGOUT = 'USER_LOGOUT';

const rootReducer = (state: IStore | undefined, action: any) => {
  if (action.type === USER_LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default createStore(rootReducer, {}, compose(applyMiddleware(thunk)));
