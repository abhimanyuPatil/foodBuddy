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
import React from 'react'
import {HomeIcon} from '../utils/icons'
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
          screen:Home
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
        Home:{
          screen:Home
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
    activeColor:'#fa6801',
    inactiveColor:'#ccc',
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
            return HomeIcon({color:tintColor,size:22});
          case TabNames.search:
            return HomeIcon({color:tintColor,size:22});
          case TabNames.cart:
            return HomeIcon({color:tintColor,size:22});
          case TabNames.account:
            return HomeIcon({color:tintColor,size:22});
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
  