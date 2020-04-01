import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { Header, Icon } from 'react-native-elements'
import { TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import { AppText } from './AppText'
import { withTheme } from 'react-native-paper'
import { ITheme, large } from '../../App'
interface IHeader{
    theme:ITheme
    navigation:any
}
const HeaderBar = (props:IHeader)=>{
    return (
        <SafeAreaView>
            <Header
            containerStyle={styles.headerContainer}
            placement="center"
            // leftComponent={
            //     <TouchableOpacity
            //         onPress={() => {
            //         props.navigation.openDrawer();
            //         }}>
            //         <Icon
            //         size={30}
            //         color={props.theme.colors.theme}
            //         name="menu"
            //         type="material-community"
            //         />
            //     </TouchableOpacity>
            //     }
            centerComponent={<AppText type={['theme','header']}>Hi Divyansh</AppText>}
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
    height: screenDimensions.height * 0.08,
    paddingTop: 0,
    margin: 0,
    backgroundColor: 'transparent',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});
export default withTheme(HeaderBar)