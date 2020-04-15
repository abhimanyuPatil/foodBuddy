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
import Offers  from '../screens/Offers';
import { More } from '../screens/More';
import ManageAddress from '../screens/ManageAddress';
import { AddAddress, AddAddressContainer } from '../screens/AddAddress';
import { CommonHeader } from '../components/CommonHeader';

export const TabNames = {
  home:'HOME',
  offers:"OFFERS",
  cart:'CART',
  more:'PROFILE'
}
const BottomTabs = createMaterialBottomTabNavigator(
  {
    [TabNames.home]:createStackNavigator(
      {
        Home:{
          screen:Home,
          navigationOptions:navigation =>({
            header:()=> <HeaderBar {...navigation} />
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
          navigationOptions:navigation=>({
            header:()=> <CommonHeader title='OFFERS' {...navigation} />,
            title:'OFFERS'
          })
        }
      },
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
        },
        ManageAddress:{
          screen:ManageAddress,
          navigationOptions:navigation=>({
            header:()=> <CommonHeader title={'Manage Address'} {...navigation} />,
            title:'Manage Address'
          })
        },
        AddAddress:{
          screen:AddAddressContainer,
          navigationOptions:()=>({
            headerShown:false
          })
        }
      },
      {
        // initialRouteName:'AddAddress'
        navigationOptions: ({navigation}) => {
          let tabBarVisible = true;
          if (navigation.state.routes.length > 1) {
            navigation.state.routes.map(route => {
              if (route.routeName === 'AddAddress') {
                tabBarVisible = false;
              }
            });
          }
          return {
            tabBarVisible,
          };
        },
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
      // header:()=> <HeaderBar {...navigation} />
      headerShown:false
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
  