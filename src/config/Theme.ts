import { DefaultTheme } from 'react-native-paper';
import { Fonts } from 'react-native-paper/lib/typescript/src/types';

export interface ITheme{
  dark: boolean;
    mode?: 'adaptive' | 'exact';
    roundness: number;
    colors: {
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
    fonts: Fonts;
    animation: {
        scale: number;
    };
    spacing:{
      xTiny:number
      tiny:number
      small:number
      base:number
      large:number
      xLarge:number
    }
    fontSizes:{
      base:number
      small:number
      header:number
      large:number
      error:number
    }

}
export const xTiny = 1
export const tiny = 2
export const small = 3
export const base = 5
export const large = 7
export const xLarge = 10
export const theme:ITheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
    theme:'#ff624f',
    secondary:"#222a41",
    grey0: '#121212',
  grey1: '#1a1a1a',
  grey2: '#BFBFBF',
  grey3: '#D9D9D9',
  grey4: '#cfcfcf',
  grey5: '#f8f8f8',
  success: '#28a745',
  white: '#fff',
  borderColor: '#ccc',
  },
  spacing:{
    xTiny:1,
    tiny:2,
    small:3,
    base:5,
    large:7,
    xLarge:10
  },
  fontSizes:{
    base: 16,
    small: 14,
    header: 22,
    large: 18,
    error: 12,
  }
};