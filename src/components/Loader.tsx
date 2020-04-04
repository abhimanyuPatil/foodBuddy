import React from 'react'
import LottieView from 'lottie-react-native';

export const Loader = () =>{
    return (
        <LottieView 
            source={require('../assets/lottie/loader.json')} 
            autoPlay
            loop={true}
            style={{ width: '10%',alignSelf:'center'}}
        />
    )
}