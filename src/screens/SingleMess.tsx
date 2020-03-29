import React from 'react'
import { Dimensions, Image, View, StyleSheet,Text, TouchableOpacity, Platform, UIManager, LayoutAnimation } from 'react-native'
import { AppText } from '../components/AppText'
import { Label } from '../components/Label'
import { base, theme, small, tiny, large, xLarge } from '../config/Theme'
import { FoodIcon } from '../utils/icons'
import { ScrollView } from 'react-native-gesture-handler'
import { ToggleButton, Switch, List } from 'react-native-paper'
import { AuthButton } from './Signup'
const cuisines=['Indian','Chinese']
const services=['Dining','Tiffin']
const starters = ['Veg Manchurian','Veg Chilly','Veg 65','veg Manchurian','Veg Chilly','Veg 65','veg Manchurian','Veg Chilly','Veg 65']
const screenDimensions = Dimensions.get('window');
if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
const timings = ['10am - 11am','11am - 12pm','12pm - 1pm','1pm - 2pm','2pm - 3pm','3pm - 4pm','4pm - 5pm','5pm - 6pm']
export const SingleMess = ()=>{
    return (
        <ScrollView style={{flex:1,paddingHorizontal:`${small}%`}}>
            <NameCard />
            <Recommended />
            <Cuisine1 />
        </ScrollView>
    )
}
const Cuisine1 = () =>{
    const [status,setStatus] = React.useState(false)
    const [expanded,setExpanded] = React.useState(false)
    return(
        <View style={{backgroundColor:'#fff',paddingHorizontal:`${small}%`,marginVertical:`${base}%`}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:`${small}%`,alignItems:'center'}}>
                <AppText type={['bold']}>Indian</AppText>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <AppText type={['small']}>VEG ONLY</AppText>
                    <Switch
                        color={theme.colors.theme}
                        value={status}
                        onValueChange={() =>
                            setStatus(!status)
                        }
                    />
                </View>
            </View>
            <List.Accordion
                title="Veg Starters"
                description={'12 Items'}
                left={props => <></>}
                titleStyle={{color:theme.colors.theme}}
                expanded={expanded}
                onPress={()=>{
                    // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                    setExpanded(!expanded)
                }}
                >
                    {
                        starters.map((S,idx)=>{
                            return (
                                <View key={idx} style={{flexDirection:'row',flex:1,paddingLeft:0,alignItems:'center',marginVertical:`${base}%`}}>
                                    <View style={{flex:.1}}>
                                        <Image resizeMode='contain' style={{width:30,height:30}}  source={require('../assets/images/veg.png')} />
                                    </View>
                                    <View style={{flex:0.9}}>
                                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                            <AppText>{S}</AppText>
                                            <AddButton />
                                        </View>
                                        <AppText>
                                            <AppText style={{textDecorationLine:'line-through'}} type={['small']}>Rs.100</AppText>
                                            <AppText>  Rs. 80</AppText>
                                        </AppText>
                                    </View>
                                </View>
                            )
                        })
                    }
                    
                </List.Accordion>
        </View>
    )
}
const Recommended = () =>{
    const [status,setStatus] = React.useState(false)
    return (
        <View style={{backgroundColor:'#fff',paddingHorizontal:`${small}%`,marginVertical:`${base}%`}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:`${small}%`,alignItems:'center'}}>
                <AppText type={['bold']}>Recommended</AppText>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <AppText type={['small']}>VEG ONLY</AppText>
                    <Switch
                        color={theme.colors.theme}
                        value={status}
                        onValueChange={() =>
                            setStatus(!status)
                        }
                    />
                </View>
            </View>
            <View style={{flexDirection:'row',flex:1,justifyContent:'space-evenly'}}>
                <SingleItem />
                <SingleItem />
            </View>
            <View style={{flexDirection:'row',flex:1,justifyContent:'space-evenly'}}>
                <SingleItem />
                <SingleItem />
            </View>
            <View style={{flexDirection:'row',flex:1,justifyContent:'space-evenly'}}>
                <SingleItem />
                <SingleItem />
            </View>
        </View>
    )
}
const SingleItem = () =>{
    return (
        <View style={styles.menuContainer}>
                <Image source={require('../assets/images/tiffin.png')} style={styles.menuImage} />
                <View style={{flexDirection:'row',marginTop:`${small}%`}}>
                    <Image resizeMode='contain' style={{width:20,height:20}}  source={require('../assets/images/veg.png')} />
                    <AppText type={['small']}> Combo Meal Tiffin</AppText>
                </View>
                <AppText style={{marginTop:`${small}%`}} type={['xSmall']}>1 Aalu Sabji, Dal, Rice, 2 Chapati</AppText>
                {/* price Container */}
                <View style={{marginTop:`${xLarge}%`}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <AppText>Rs. 80</AppText>
                        <TouchableOpacity style={{borderWidth:.8,borderColor:theme.colors.theme,height:35,width:70,justifyContent:'center',alignItems:'center',borderRadius:20}}>
                            <AppText type={['theme']}>ADD</AppText>
                        </TouchableOpacity>
                        {/* <AuthButton inverted={true} title='ADD' /> */}
                    </View>
                    <AppText style={{textDecorationLine:'line-through'}} type={['small']}>Rs. 100</AppText>
                </View>
        </View>
    )
}
const styles = StyleSheet.create({
    menuImage:{width:'100%',height:screenDimensions.height * 0.20,borderRadius:20},
    menuContainer:{
        flex:0.48,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    }
})
const AddButton = () =>{
    return (
        <TouchableOpacity style={{borderWidth:.8,borderColor:theme.colors.theme,height:35,width:70,justifyContent:'center',alignItems:'center',borderRadius:20}}>
            <AppText type={['theme']}>ADD</AppText>
        </TouchableOpacity>
    )
}
const NameCard = () =>{
    return (
        <View  style={{backgroundColor:'#fff',borderRadius:8,paddingVertical:`${base}%`,paddingLeft:`${base}%`,flexDirection:'row',marginTop:`${small}%`}}>
        <View style={{flex:0.2}}>
            <Image source={require('../assets/images/tiffin.png')} resizeMode='contain' style={{width:'90%',height:screenDimensions.height*.2}} />
        </View>
        <View style={{flex:0.8}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <AppText>
                    Mom's Kitchen
                </AppText>
                <Image resizeMode='contain' style={{width:20,height:20}}  source={require('../assets/images/veg.png')} />
            </View>
            <AppText type={['small']} style={{marginVertical:`${small}%`}}>
            {
                cuisines.map((C,i)=>{
                if(i+1===cuisines.length){
                    return ` ${C}`
                }else if(i===0){
                    return `${C},`
                }else{
                    return ` ${C},`
                }
                })
            }
            </AppText>
            <View style={{flexDirection:'row'}} >
                <FoodIcon color={theme.colors.theme} size={18}/>
                <AppText type={['success','small']}>
                {' '}
                {
                    services.map((S,index)=>{
                    if(index+1===services.length){
                        return `& ${S}`
                    }else if(index===services.length-2){
                        return `${S} `
                    }else {
                        return `${S}, `
                    }
                    })
                }
                </AppText>
            </View>
            <View style={{flexDirection:'row',marginVertical:`${small}%`,display:'flex',flexWrap:'wrap'}}>
                <AppText type={['small']}>Timings: </AppText>
                {/* <View style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around',flexDirection:'row'}}> */}
                    {
                        timings.map((T,idx)=>{
                            return (
                                <Label ViewStyle={{marginHorizontal:`${tiny}%`}}  textStyle={{fontSize:10}} inverted type={'grey2'} text={T} key={idx}  />
                            )
                        })
                    }
                {/* </View> */}
            </View>
        </View>
    </View>
    )
}