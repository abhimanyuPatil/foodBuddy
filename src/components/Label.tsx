import React from 'react';
import { TextStyle, ViewStyle, View } from 'react-native';
import { small, theme, IColour, tiny } from '../config/Theme';
import { AppText } from './AppText';
interface ILabel {
  text: string;
  type?: keyof IColour;
  inverted?: boolean;
  textStyle?: TextStyle;
  ViewStyle?: ViewStyle;
}
export const Label = (props: ILabel) => {
  const {
    type = 'secondary',
    text,
    inverted = false,
    textStyle = {},
    ViewStyle = {},
  } = props;
  return (
    <View
      style={[
        {
          paddingHorizontal: `${tiny}%`,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          backgroundColor: inverted ? '#fff' : theme.colors[type],
          borderWidth: inverted ? 0.8 : 0,
          borderColor: theme.colors[type],
          height: 25,
          borderRadius:4
        },
        { ...ViewStyle },
      ]}>
      <AppText
        type={
          inverted
            ? ['bold', 'center', 'small', `${type}`]
            : ['bold', 'white', 'center', 'small']
        }
        style={[
          {
            textTransform: 'uppercase',
          },
          { ...textStyle },
        ]}>
        {text}
      </AppText>
    </View>
  );
};
