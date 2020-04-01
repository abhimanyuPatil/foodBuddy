import AsyncStorage from '@react-native-community/async-storage';

export default {
  getItem: async (key: string): Promise<string> => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
    return '';
  },

  setItem: async (key: string, value: string): Promise<boolean> => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log(`set ${key} into async storage`);
      return true;
    } catch (error) {
      console.log(error.message);
    }
    return false;
  },

  removeItem: async (key: string): Promise<void> => {
    try {
      return await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log(error.message);
    }
    return undefined;
  },
};
