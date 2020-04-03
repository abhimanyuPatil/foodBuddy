import React from 'react';
import { createAppContainer, createSwitchNavigator, StackActions } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import HeaderBar from '../components/Header';
import Cart from '../screens/Cart';
import Home from '../screens/Home';
import Login from '../screens/Login';
import { SignUp } from '../screens/Signup';
import SingleMess  from '../screens/SingleMess';
import { AccountIcon, CartIcon, HomeIcon, OffersIcon } from '../utils/icons';
import { Booking } from '../screens/Booking';
import { Menu } from '../components/Menu';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { Offers } from '../screens/Offers';
import { More } from '../screens/More';

export const TabNames = {
  home:'HOME',
  offers:"OFFERS",
  cart:'CART',
  more:'MORE'
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
        },
        SingleMess:{
          screen:SingleMess,
          navigationOptions:()=>({
            headerShown:false
          })
        },
        Booking:{
          screen:Booking,
          navigationOptions:()=>({
            headerShown:false
          })
        }
      },
      {
        initialRouteName:'Home'
      }
    ),
    [TabNames.offers]:createStackNavigator(
      {
        Offers:{
          screen:Offers,
          navigationOptions:()=>({
            headerShown:false
          })
        }
      },
      {
        navigationOptions:()=>({
          headerShown:false
        })
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
    [TabNames.more]:createStackNavigator(
      {
        More:{
          screen:More,
          navigationOptions:()=>({
            headerShown:false
          })
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
          case TabNames.offers:
            return <OffersIcon color={tintColor} size={22}/>
          case TabNames.cart:
            return <CartIcon color={tintColor} size={22}/>
          case TabNames.more:
            return <AccountIcon color={tintColor} size={22}/>
          default:
            return null
        }
      },
      tabBarOnPress: ({navigation, defaultHandler}) => {
        navigation.dispatch(StackActions.popToTop());
        defaultHandler();
      },
    }),
    navigationOptions:navigation =>({
      header:()=> <HeaderBar {...navigation} />
    })
  }
)
const AppStack = createStackNavigator(
  {
    BottomTabs:{screen:BottomTabs} 
  }
)
const App = createDrawerNavigator(
  {
    App:{screen:AppStack}
  },
  {
    contentComponent:Menu
  }
)
const AuthStack = createStackNavigator(
  {
    Login:{screen:Login,navigationOptions:()=>({headerShown:false})},
    SignUp:{screen:SignUp,navigationOptions:()=>({headerShown:false})}
  },
  {
    initialRouteName:'SignUp'
  }
)
export default createAppContainer(
    createSwitchNavigator(
      {
        AuthStack:AuthStack,
        AppStack:App
      },
      {
        initialRouteName:'AppStack'
      }
    ),
  );
  