import React from 'react'
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import { Header } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import { small, ITheme } from '../config/Theme'
import { ChevronRight, ChevronLeft, HeaderBack } from '../utils/icons'
import { AppText } from './AppText'
import { useNavigation } from '../hooks/useNavigation'
interface IHeader{
    theme:ITheme
    navigation:any
    title:string
}
export const CommonHeader = (props:IHeader)=>{
    const {navigate} = useNavigation()
    console.log(props)
    return (
        <SafeAreaView>
            <Header
            containerStyle={styles.headerContainer}
            placement="left"
            leftComponent={
                <TouchableOpacity onPress={()=>navigate('HOME')}>
                    <HeaderBack size={22} color={'#111'} />
                </TouchableOpacity>
                }
            centerComponent={
                <TouchableOpacity>
                    <AppText style={{marginVertical:`${small}%`}} type={[]}>{props.title}</AppText>
                </TouchableOpacity>
            }      
            />
        </SafeAreaView>
    )
}
const screenDimensions = Dimensions.get('window');
const styles = StyleSheet.create({
  headerContainer: {
    height: screenDimensions.height * 0.09,
    paddingTop: 0,
    padding:0,
    margin: 0,
    backgroundColor: '#fff',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});
// export default withTheme(HeaderBar)