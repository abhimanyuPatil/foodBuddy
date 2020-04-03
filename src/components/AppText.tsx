import React, { ReactNode } from 'react';
import { StyleSheet, TextProps } from 'react-native';
import { Text, ThemeProps, } from 'react-native-elements';
import { withTheme } from 'react-native-paper';
import { ITheme, theme } from '../config/Theme';
interface IColour {
    primary: string;
    background: string;
    surface: string;
    accent: string;
    error: string;
    text: string;
    onSurface: string;
    onBackground: string;
    disabled: string;
    placeholder: string;
    backdrop: string;
    notification: string;
    theme:string
    secondary:string
    grey0: string;
    grey1: string;
    grey2: string;
    grey3: string;
    grey4: string;
    grey5: string;
    success: string;
    white: string;
    borderColor: string;
}; 
interface IProps
  extends Partial<
      ThemeProps<{
        colors: IColour;
      }>
    >,
    TextProps {
  children: string | ReactNode;
  theme: ITheme;
  type?: Array<keyof ITypography>;
}

const getType = (type: keyof ITypography, theme: ITheme) => {
  return styles[type]
    ? typeof styles[type] === 'function'
      ? styles[type](theme)
      : styles[type]
    : {};
};

export const AppText = withTheme((props: IProps) => {
  const { children, style, type = [], theme } = props;
  const textStyles = [
    //to comply with styled components style all styles must be array
    StyleSheet.flatten([
      styles.text(theme),
      type.map(e => getType(e, theme)),
      style,
    ]),
  ];
  return (
    <Text {...props} style={textStyles}>
      {children}
    </Text>
  );
});

interface ITypography {
  text: any;
  bold: any;
  center: any;
  primary: any;
  theme: any;
  secondary: any;
  small: any;
  muted: any;
  header: any;
  white: any;
  large: any;
  normal: any;
  error: any;
  validationError: any;
  success: any;
  capitalized: any;
  label: any;
  xSmall:any
}

const styles: ITypography = {
  text: (theme: any) => ({
    fontSize: theme.fontSizes.base ? theme.fontSizes.base : 16,
    // ...getFontStyleObject({ family: 'Lato', weight: 'Regular' }),
  }),
  bold: (theme: any) => ({
    fontSize: theme.fontSizes.base,
    fontWeight:'bold'
    // ...getFontStyleObject({ family: 'Lato', weight: 'Bold' }),
  }),
  primary: (theme: any) => ({
    // color: theme.colors.blue,
    color:'#3498db'
  }),
  theme: (theme: any) => ({
    color: theme.colors.theme,
  }),
  secondary: (theme: any) => ({
    color: theme.colors.secondary,
  }),
  white: (theme: any) => ({
    // fontSize: theme.fontSizes.base,
    color: '#fff',
  }),
  normal: (theme: any) => ({
    fontSize: theme.fontSizes.base,
    // ...getFontStyleObject({ family: 'Lato', weight: 'Regular' }),
  }),
  small: (theme: any) => ({
    fontSize: theme.fontSizes.small,
  }),
  xSmall:(theme:any)=>({
    fontSize:12
  }),
  large: (theme: any) => ({
    fontSize: theme.fontSizes.large,
  }),
  center: {
    textAlign: 'center',
  },
  muted: (theme: any) => ({
    color: theme.colors.grey2,
    // ...getFontStyleObject({ family: 'Lato', weight: 'Regular' }),
  }),
  header: (theme: any) => ({
    textAlign: 'center',
    fontSize: theme.fontSizes.header,
    // ...getFontStyleObject({ family: 'Lato', weight: 'Bold' }),
  }),
  error: (theme: any) => ({
    color: theme.colors.error,
  }),
  validationError: (theme: any) => ({
    color: theme.colors.error,
    fontSize: theme.fontSizes.error,
    marginTop: 5,
    padding: '1%',
  }),
  success: (theme: any) => ({
    color: theme.colors.success,
  }),
  capitalized: {
    textTransform: 'capitalize',
  },
  label: {
    color: '#121212',
    // ...getFontStyleObject({ family: 'Lato', weight: 'Bold' }),
  },
};
