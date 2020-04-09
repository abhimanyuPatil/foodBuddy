import React from 'react';
import { TextStyle, ViewStyle, View, ModalProps, Modal, TouchableOpacity, StyleProp, TouchableOpacityProps } from 'react-native';
import { small, theme, IColour, tiny, large } from '../config/Theme';
import { AppText } from './AppText';
interface ILabel extends TouchableOpacityProps {
  text: string;
  type?: keyof IColour;
  inverted?: boolean;
  textStyle?: TextStyle;
  ViewStyle?: ViewStyle;
  rightIcon?:React.ReactElement
}
export const Label = (props: ILabel) => {
  const {
    type = 'secondary',
    text,
    inverted = false,
    textStyle = {},
    ViewStyle = {},
    ...rest
  } = props;
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[
        {
          flexDirection:'row',
          paddingHorizontal: `${tiny}%`,
          justifyContent: 'space-between',
          alignContent: 'center',
          alignItems: 'center',
          backgroundColor: inverted ? '#fff' : theme.colors[type],
          borderWidth: inverted ? 0.8 : 0,
          borderColor: theme.colors[type],
          height: 30,
          borderRadius:4,
        },
        { ...ViewStyle },
      ]}
      {...rest}>
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
      {props.rightIcon}
    </TouchableOpacity>
  );
};

// general purpose modal
export const GeneralModal = (
  props: Omit<ModalProps, 'onDismiss' | 'onRequestClose'> & {
    children: React.ReactChild;
    showModal: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    toggleModal: (x: boolean) => void;
  },
) => {
  const {
    children,
    showModal,
    toggleModal,
    containerStyle = {},
    ...rest
  } = props;

  return (
    <Modal
      visible={showModal}
      animationType="fade"
      presentationStyle="overFullScreen"
      transparent={true}
      onDismiss={() => {
        toggleModal(false);
      }}
      onRequestClose={() => {
        toggleModal(false);
      }}
      {...rest}>
      <TouchableOpacity
        activeOpacity={1}
        // onPress={() => toggleModal(false)}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.4)',
          padding: `${large}%`,
          justifyContent: 'center',
          ...containerStyle,
        }}>
        {children}
      </TouchableOpacity>
    </Modal>
  );
};