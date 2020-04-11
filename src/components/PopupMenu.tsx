import React, { useState } from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import { Menu } from 'react-native-paper';
import { AppText } from './AppText';
import { Icon } from 'react-native-elements';

interface IOptions {
  value: string;
  label: string;
}
interface IProps {
  options: IOptions[];
  onItemSelect: (value: string) => void;
  containerStyle?: ViewStyle;
  iconColor?: string;
}
export const PopupMenu = (props: IProps) => {
  const { options, onItemSelect, containerStyle, iconColor } = props;
  const [menu, toggleMenu] = useState(false);

  return (
    <Menu
      visible={menu}
      onDismiss={() => {
        toggleMenu(false);
      }}
      anchor={
        <TouchableOpacity
          {...containerStyle}
          onPress={() => {
            toggleMenu(!menu);
          }}>
          <Icon name='dots-three-vertical' type='entypo' size={18} />
        </TouchableOpacity>
      }>
      {options.map((opt, idx) => {
        return (
          <Menu.Item
            key={idx}
            onPress={() => {
              toggleMenu(false);
              return onItemSelect(opt.value);
            }}
            title={opt.label}
          />
        );
      })}
    </Menu>
  );
}
