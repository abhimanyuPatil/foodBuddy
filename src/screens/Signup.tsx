import React from 'react'
import { ImageBackground, Dimensions, View, TouchableOpacity } from 'react-native'
import { AppText } from '../components/AppText'
import { Input, InputProps, Icon, CheckBox, ButtonProps, Button } from 'react-native-elements'
import { base, theme, xLarge } from '../config/Theme'
import { useNavigation } from '../hooks/useNavigation'
const window = Dimensions.get('window')
export const SignUp = ()=>{
    const navigation = useNavigation()
    const useAs = navigation.getParam('useAs','signIn')
    return(
        <ImageBackground style={{width:window.width,height:window.height,paddingHorizontal:`${base}%`,flex:1,justifyContent:'space-around'}} source={require('../assets/images/screen.png')}>
            <AppText style={{fontSize:30,marginTop:window.height*.05}} type={['large','white']}>{useAs === 'signIn' ? 'Sign In' : 'Sign Up'}</AppText>
            <AuthBox useAs={useAs}/>
            {
                useAs === 'signUp' &&  <CheckBox containerStyle={{backgroundColor:'transparent',borderWidth:0}} textStyle={{fontWeight:'normal'}} checked={false}  title='I agree to the terms and conditions' />
            }
            <AuthButton />
            {
                useAs === 'signIn' ? 
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <AppText style={{}} type={['center']}>New to FoodBuddy?</AppText> 
                    <TouchableOpacity onPress={()=>navigation.push('SignUp',{useAs:'signUp'})}><AppText type={['theme']}>{'  '}Sign Up here</AppText></TouchableOpacity>
                </View>
                :
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <AppText style={{}} type={['center']}>Already have an account? </AppText>
                    <TouchableOpacity onPress={()=>navigation.push('SignUp',{useAs:'signIn'})}><AppText type={['theme']}>{'  '}Sign In here</AppText></TouchableOpacity>
                </View>
            }
            
        </ImageBackground>
    )
}
interface IAuthBox {
    useAs:'signIn' | 'signUp'
}
const AuthBox = (props:IAuthBox)=>{
    const {useAs} = props
    return (
        <View style={{backgroundColor:'#fff',borderWidth:.8,borderColor:'#999',borderRadius:5,paddingVertical:`${base}%`,marginTop:window.height*.08,elevation:5}}>
           {
               useAs === 'signUp' && <AuthInput placeholder={'Enter your name'} label='NAME' />
           } 
            <AuthInput placeholder={'Enter your email'} label='EMAIL' />
            <AuthInput placeholder={'Enter password'} label='PASSWORD' secureTextEntry={true} />
            <AppText type={['small','center']}>{`or ${useAs === 'signIn' ? 'login' : 'register'} using social media`}</AppText>
            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:`${base}%`,paddingHorizontal:`${xLarge*4}%`}}>
            <TouchableOpacity style={{}}>
                <Icon name='facebook' type='material-community' size={22} color='#4267B2' />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name='google' type='antdesign' size={22} color={theme.colors.theme}/>
            </TouchableOpacity>
            </View>
        </View>
    )
}
export const AuthInput = (props:InputProps)=>{
    return (
        <Input
        containerStyle={{marginVertical:`${base}%`}}
        inputStyle={ {
            marginLeft: 10,
            fontSize: 16,
          }}
          
          labelStyle={{
            color: '#566',
            paddingLeft: '2%',
            fontSize: 14,
          }}
        inputContainerStyle={{
            borderBottomWidth: 0.6,
            borderWidth: 0,
            borderRadius: 0,
            minHeight: 50,
            overflow: 'hidden',
            borderColor: '#ccc',
          }} {...props}/>
    )
}
const buttonWidth = window.width/6.5
const buttonHeight = window.height/18
const buttonRadius = (buttonWidth/buttonHeight)*10

export const AuthButton = (props:ButtonProps)=>{
    return (
        <Button 
        {...props}
        containerStyle={{alignSelf:'center',elevation:4,}}
        buttonStyle={{backgroundColor:theme.colors.theme,width:buttonWidth,height:buttonHeight,borderRadius:buttonRadius}}
        icon={
          <Icon
            name="check"
            size={20}
            color={theme.colors.white}
          />} 
        />
    )
}