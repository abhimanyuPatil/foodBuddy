import {
    createAppContainer,
    createSwitchNavigator,
    StackActions
  } from 'react-navigation';
import Home from '../screens/Home'
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { theme } from '../../App';
import {HomeIcon, SearchIcon, CartIcon,AccountIcon} from '../utils/icons'
import React from 'react'
import Cart from '../screens/Cart';
const TabNames = {
  home:'HOME',
  search:"SEARCH",
  cart:'CART',
  account:'ACCOUNT'
}
const BottomTabs = createMaterialBottomTabNavigator(
  {
    [TabNames.home]:createStackNavigator(
      {
        Home:{
          screen:Home,
          navigationOptions:()=>({
            headerShown:false
          })
        }
      }
    ),
    [TabNames.search]:createStackNavigator(
      {
        Home:{
          screen:Home
        }
      }
    ),
    [TabNames.cart]:createStackNavigator(
      {
        Cart:{
          screen:Cart,
          navigationOptions:()=>({
            headerShown:false
          })
        }
      }
    ),
    [TabNames.account]:createStackNavigator(
      {
        Home:{
          screen:Home
        }
      }
    ),
  },
  {
    initialRouteName:'HOME',
    shifting:true,
    labeled:true,
    backBehavior: 'initialRoute',
    activeColor:'#ff624f',
    inactiveColor:'#222a41',
    // activeColor: theme.colors.theme,
    // inactiveColor: theme.colors.disabled,
    barStyle: {
      backgroundColor: '#fff',
      height: 60,
      borderTopWidth: 1,
      borderTopColor: '#eee',
    },
    defaultNavigationOptions:({navigation})=>({
      lazy:false,
      tabBarIcon:({tintColor})=>{
        const {routeName} = navigation.state;
        switch(routeName){
          case TabNames.home:
            return <HomeIcon color={tintColor} size={22} />
          case TabNames.search:
            return <SearchIcon color={tintColor} size={22}/>
          case TabNames.cart:
            return <CartIcon color={tintColor} size={22}/>
          case TabNames.account:
            return <AccountIcon color={tintColor} size={22}/>
          default:
            return null
        }
      },
      tabBarOnPress: ({navigation, defaultHandler}) => {
        navigation.dispatch(StackActions.popToTop());
        defaultHandler();
      },
    })
  }
)
const AuthStack = createStackNavigator(
  {
    Login:{screen:Login,navigationOptions:()=>({headerShown:false})},
  }
)
export default createAppContainer(
    createSwitchNavigator(
      {
        AuthStack:AuthStack,
        AppStack:BottomTabs
      },
      {
        initialRouteName:'AppStack'
      }
    ),
  );
  