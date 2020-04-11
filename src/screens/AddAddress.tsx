import { View, Modal, StyleSheet, Image,Text, TouchableOpacity, KeyboardAvoidingView } from "react-native"
import React, { useState } from "react"
import { useDimensions } from "../hooks/DimensionProvider"
import { useResponsiveHelper } from "../hooks/responsive"
import { AppText } from "../components/AppText"
import { small, large, base, tiny, theme } from "../config/Theme"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GeneralModal, Label } from "../components/Label"
import { CloseIcon, HomeIcon, HomeIconO, OfficeIconO, LocationIconO, OfficeIcon, LocationIcon } from "../utils/icons"
import { Input } from "react-native-elements"
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Fumi } from 'react-native-textinput-effects';
import { ThemeButton } from "../components/Buttons"
import {useForm,FormContext, Controller} from 'react-hook-form'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { specialCharacterValidator, notMoreThan10AnyNonAlphabeticalCharacter, checkForAlphabets } from "../utils/validators"
import * as Yup from 'yup'
import { useDispatch } from "react-redux"
import { ADD_ADDRESS } from "../Redux/user/types"
import { useNavigation } from "../hooks/useNavigation"
const validationSchema = Yup.object().shape({
    address_line2:Yup.string()
        .required('This field is required')
        .test(
        'special character test',
        'This field cannot contain only special characters or numbers',
        specialCharacterValidator,
        )
        .test(
        'alphabets character test',
        'This field should contain at least one alphabet',
        checkForAlphabets,
        )
        .test(
        'more special chars',
        'Cannot contain more than 10 special characters',
        notMoreThan10AnyNonAlphabeticalCharacter,
        ),
    landmark:Yup.string()
        .required('This field is required')
        .test(
        'special character test',
        'This field cannot contain only special characters or numbers',
        specialCharacterValidator,
        )
        .test(
        'alphabets character test',
        'This field should contain at least one alphabet',
        checkForAlphabets,
        )
        .test(
        'more special chars',
        'Cannot contain more than 10 special characters',
        notMoreThan10AnyNonAlphabeticalCharacter,
        ),
    type:Yup.mixed().required('Please select address type').oneOf(['home','office','other'],'Please select one from the types')
})
export const AddAddressContainer = () =>{
    const navigation = useNavigation()
    return (
        <AddAddress initialData={defaultAddressData} onSubmit={()=>navigation.navigate('ManageAddress')} />
    )
}
const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};
interface IAddAddress {
    onSubmit:Function
    initialData:{}
}
const defaultAddressData = {
    address_line1:'',
    address_line2:'',
    landmark:'',
    type:'home'
}
export const AddAddress = (props:IAddAddress)=>{
    const {heightPercentageToDP,widthPercentageToDP} = useResponsiveHelper()
    const [addressModal,toggleModal] = useState(false)
    const methods = useForm({
        validationSchema:validationSchema,
        defaultValues:{
            ...defaultAddressData,
            ...props.initialData
        }
    })
    const [type,setType]=useState('home')
    const navigation = useNavigation()
    console.log(methods.watch())
    console.log(methods.errors)
    const dispatch = useDispatch()
    React.useEffect(()=>{
        methods.register('type')
        methods.setValue('type',type)
    },[])
    const onSubmit = (data:any)=>{
        console.log('d',data)
        dispatch({
            type:ADD_ADDRESS,
            payload:{...data,address_line1:'Kothrud, Pune'}
        })
        return props.onSubmit()
    }
    const changeType = (type:string)=>{
        setType(type)
        methods.setValue('type',type)
    }
    return (
        <KeyboardAwareScrollView style={{flex:1}}>
        <View style={{flex:1,backgroundColor:'#fff',justifyContent:'space-between'}}>
            <View style={{height:heightPercentageToDP(40),backgroundColor:'grey'}}>
                <AppText type={['center']}>Map with current location will be shown here</AppText>
            </View>
            <View style={{paddingHorizontal:`${small}%`,height:heightPercentageToDP(43)}}>
                <AppText>Your Location</AppText>
                <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:0.8,paddingBottom:`${small}%`,marginVertical:`${small}%`,borderColor:'#ddd'}}>
                    <AppText>Kothrud, Pune</AppText>
                    <TouchableOpacity onPress={()=>toggleModal(true)}>
                        <AppText type={['theme','small']}>CHANGE</AppText>
                    </TouchableOpacity>
                </View>
                <FormContext {...methods}>
                    <Controller
                        as={
                                <Fumi
                                    label={'Complete Address*'}
                                    iconClass={FontAwesomeIcon}
                                    iconName={'address-book'}
                                    iconColor={'#f95a25'}
                                    iconSize={20}
                                    iconWidth={40}
                                    inputPadding={12}
                                    inputStyle={{color:'#111',fontSize:16,borderBottomWidth:0.8}}
                                />                                
                        }
                        control={methods.control}
                        name="address_line2"
                        onChange={args => args[0].nativeEvent.text}
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    <AppText type={['small','validationError']}>{methods?.errors?.address_line2?.message}</AppText>

                    <Controller
                        as={
                                <Fumi
                                    label={'Landmark*'}
                                    iconClass={MaterialIcons}
                                    iconName={'my-location'}
                                    iconColor={'#f95a25'}
                                    iconSize={20}
                                    iconWidth={40}
                                    inputPadding={12}
                                    inputStyle={{color:'#111',fontSize:16,borderBottomWidth:0.8}}
                                />                                
                        }
                        control={methods.control}
                        name="landmark"
                        onChange={args => args[0].nativeEvent.text}
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    <AppText type={['small','validationError']}>{methods?.errors?.landmark?.message}</AppText>

                    <AppText>Save Address as</AppText>
                    <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:`${small}%`}}>
                        <Label onPress={()=>changeType('home')} inverted={type!=='home'} type={'success'} text='Home' rightIcon={type ==='home' ? <HomeIcon size={14} color={'#fff'}/> : <HomeIconO size={14} color={theme.colors.success} />} />
                        <Label onPress={()=>changeType('office')} inverted={type!=='office'} type={'success'} text='Office ' rightIcon={type ==='office' ?<OfficeIcon size={14} color={'#fff'} /> : <OfficeIconO size={14} color={theme.colors.success} />} />
                        <Label onPress={()=>changeType('other')} inverted={type!=='other'} type={'success'} text='Other ' rightIcon={type ==='other'?<LocationIcon size={14} color={'#fff'} />:<LocationIconO size={14} color={theme.colors.success} />} />
                    </View>
                </FormContext>
                
                
            </View>

        </View>
        <ThemeButton onPress={methods.handleSubmit(onSubmit)} title={'Save Address'} containerStyle={{width:'100%'}} />

        <Modal
                visible={addressModal}
                animationType="fade"
                presentationStyle="overFullScreen"
                transparent={true}
                onDismiss={() => {
                    toggleModal(false);
                }}
                onRequestClose={() => {
                    toggleModal(false);
                }}>
                <TouchableOpacity activeOpacity={1} onPress={()=>toggleModal(false)} style={{height:heightPercentageToDP(30)}}></TouchableOpacity>
                <View style={[styles.topContainer,{height:heightPercentageToDP(70)}]}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <AppText type={['bold','large']}>Search Location</AppText>
                        <TouchableOpacity onPress={()=>{console.log('pressed');toggleModal(false)}}>
                            <CloseIcon size={22} color={'#111'}  />
                        </TouchableOpacity>
                    </View>
                    <GooglePlacesAutocomplete
                        placeholder='Search'
                        minLength={2} // minimum length of text to search
                        autoFocus={false}
                        returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                        keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
                        listViewDisplayed='auto'    // true/false/undefined
                        fetchDetails={true}
                        renderDescription={row => row.description} // custom description render
                        onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                            console.log(data, details);
                        }}

                        getDefaultValue={() => ''}

                        query={{
                            // available options: https://developers.google.com/places/web-service/autocomplete
                            key: 'YOUR API KEY',
                            language: 'en', // language of the results
                            types: '(cities)' // default: 'geocode'
                        }}

                        styles={{
                            textInputContainer: {
                              backgroundColor: 'rgba(0,0,0,0)',
                              borderTopWidth: 0,
                              borderBottomWidth:0,
                            //   borderWidth:0.6,
                              elevation:0
                            },
                            textInput: {
                              marginLeft: 0,
                              marginRight: 0,
                              height: 38,
                              color: '#5d5d5d',
                              fontSize: 16,
                              borderWidth:0.6,
                            },
                            predefinedPlacesDescription: {
                              color: '#1faadb'
                            },
                          }}

                        currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
                        currentLocationLabel="Current location"
                        nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                        GoogleReverseGeocodingQuery={{
                            // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                        }}
                        GooglePlacesSearchQuery={{
                            // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                            rankby: 'distance',
                            type: 'cafe'
                        }}
                        
                        GooglePlacesDetailsQuery={{
                            // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
                            fields: 'formatted_address',
                        }}

                        filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                        predefinedPlaces={[homePlace, workPlace]}

                        debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
                        // renderLeftButton={()  => <Image source={require('path/custom/left-icon')} />}
                        // renderRightButton={() => <Text>Custom text after the input</Text>}
                        />
                </View>
            </Modal>
        </KeyboardAwareScrollView>
    )
}
const styles = StyleSheet.create({

    topContainer: {
      backgroundColor: '#fff',
      width: '100%',
      paddingTop:`${base}%`,
      paddingHorizontal:`${small}%`,
      // height: '30%',
    //   borderTopRightRadius: 10,
    //   borderTopLeftRadius: 10,
      borderTopWidth: 0.8,
      borderLeftWidth: 0.8,
      borderRightWidth: 0.8,
    },
    titleContainer: {
      paddingHorizontal: `${base}%`,
      borderBottomColor: '#ccc',
      borderBottomWidth: 0.6,
      paddingVertical: `${small}%`,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    body: {
      paddingHorizontal: `${base}%`,
      paddingVertical: `${tiny}%`,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
  