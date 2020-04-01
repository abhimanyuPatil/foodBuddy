import cartReducer from './cart'
import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import { ICartReducer } from './cart/reducer';
import thunk from 'redux-thunk';
const appReducer = combineReducers({
    cartReducer
})
export interface IStore{
    cartReducer:ICartReducer
}
export const USER_LOGOUT = 'USER_LOGOUT';

const rootReducer = (state: IStore | undefined, action: any) => {
  if (action.type === USER_LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default createStore(rootReducer, {}, compose(applyMiddleware(thunk)));
