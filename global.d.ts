type PickKey<T extends Record<string, any>, K extends keyof T> = T[K];
type ObjectKey<O> = O extends Record<string, any> ? keyof O : never;
declare module 'react-native-snap-carousel'
declare module 'react-native-image-overlay'