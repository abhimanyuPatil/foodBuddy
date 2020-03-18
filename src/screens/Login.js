import React, { useState } from 'react';
import { Dimensions, Image, KeyboardAvoidingView, StyleSheet, View, TouchableOpacity,Text } from 'react-native';
import { withTheme } from 'react-native-paper';
import ReactNativePhoneInput from 'react-native-phone-input';
import Carousel from 'react-native-snap-carousel';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export const ENTRIES1 = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg'
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg'
    },]
    const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
    const carouselHeight = viewportHeight * 0.7;
const slideHeight = viewportHeight * 0.2;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);
function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}
export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;
const Login = (props)  => {
    console.log(props.theme)
    const [slider1ActiveSlide,setSlide] = useState(1)
    const  _renderItemWithParallax= ({item, index})=> {        
        return (
            <View key={index}>
                <Image 
                    style={{
                        // position: 'absolute',
                        width: sliderWidth,
                        height:carouselHeight,
                        alignSelf: 'center',
                        // top: carouselHeight * 0.5,
                    }} 
                    source={{uri:item.illustration}}/>
            </View>
   
        );
    }
  return (
    <KeyboardAvoidingView style={{flex:1}} behavior={'padding'}>

        {/* <View style={[styles.carouselContainer,{backgroundColor:props.theme.colors.secondary}]} >
            <Carousel
                //   ref={c => this._slider1Ref = c}
                  data={ENTRIES1}
                  renderItem={_renderItemWithParallax}
                  sliderWidth={sliderWidth}
                  itemWidth={sliderWidth}
                  hasParallaxImages={true}
                  firstItem={slider1ActiveSlide}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.7}
                  // inactiveSlideShift={20}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  loop={true}
                  loopClonesPerSide={2}
                  autoplay={true}
                  autoplayDelay={500}
                  autoplayInterval={3000}
                  onSnapToItem={(index) => setSlide(index) }
                />
            <TouchableOpacity style={{alignItems:'center',marginVertical:`5%`}}>
                <Text style={{textDecorationLine:'underline',textAlignVertical:'center',color:'#f1f1f1'}}>By continuing, I accept terms of Service</Text>
            </TouchableOpacity>
        </View> */}
            <KeyboardAvoidingView style={{borderWidth:0.8,borderColor:'#ccc',flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{flex:.6,padding:'5%',}}>
                    <ReactNativePhoneInput autoFormat={true} initialCountry='in'/>
                </View>
                {/* <View  style={{flex:.3,justifyContent:'center'}}>
                    <TouchableOpacity style={{backgroundColor:props.theme.colors.theme,alignItems:'center',borderRadius:30,paddingVertical:'8%'}}><Text>Continue</Text></TouchableOpacity>
                </KeyboardAvoidingView> */}
            </KeyboardAvoidingView>
      </KeyboardAvoidingView>

  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  slider: {
    // marginTop: 15,
    overflow: 'visible' // for custom animations
},
sliderContentContainer: {
    // paddingVertical: 10 // for custom animation
},
carouselContainer: {
    // backgroundColor:'red',
    width: viewportWidth,
    // height: viewportHeight*.88,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 6,
  },
});

export default withTheme(Login);
