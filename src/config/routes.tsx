import React from 'react';
import { createAppContainer, createSwitchNavigator, StackActions } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import HeaderBar from '../components/Header';
import Cart from '../screens/Cart';
import Home from '../screens/Home';
import Login from '../screens/Login';
import { SignUp } from '../screens/Signup';
import { SingleMess } from '../screens/SingleMess';
import { AccountIcon, CartIcon, HomeIcon, OffersIcon } from '../utils/icons';
import { Timings } from '../screens/Timings';
const TabNames = {
  home:'HOME',
  offers:"OFFERS",
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
        },
        SingleMess:{
          screen:SingleMess,
          navigationOptions:()=>({
            headerShown:false
          })
        },
        Timings:{
          screen:Timings,
          navigationOptions:()=>({
            headerShown:false,
          })
        }
      },
      {
        initialRouteName:'Timings'
      }
    ),
    [TabNames.offers]:createStackNavigator(
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
          case TabNames.offers:
            return <OffersIcon color={tintColor} size={22}/>
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
        AppStack:AppStack
      },
      {
        initialRouteName:'AppStack'
      }
    ),
  );
  