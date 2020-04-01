type PickKey<T extends Record<string, any>, K extends keyof T> = T[K];
type ObjectKey<O> = O extends Record<string, any> ? keyof O : never;