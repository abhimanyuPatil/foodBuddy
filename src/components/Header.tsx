import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { Header, Icon } from 'react-native-elements'
import { TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import { AppText } from './AppText'
import { withTheme } from 'react-native-paper'
import { ITheme, large } from '../../App'
import { small, theme } from '../config/Theme'
import { LocationIcon } from '../utils/icons'
interface IHeader{
    theme:ITheme
    navigation:any
}
const HeaderBar = (props:IHeader)=>{
    return (
        <SafeAreaView>
            <Header
            containerStyle={styles.headerContainer}
            placement="left"
            leftComponent={
                <LocationIcon color={theme.colors.theme} size={24} containerStyle={{marginVertical:`${small}%`}} />
                }
            centerComponent={
                <TouchableOpacity>
                    <AppText style={{marginVertical:`${small}%`}} type={['small']}>SB Road, Saptshri Appartment, Behind ...</AppText>
                </TouchableOpacity>
            }      
            rightComponent={
                <TouchableOpacity>
                    <Icon name='notifications-none' color={props.theme.colors.theme} size={22} />
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
export default withTheme(HeaderBar)