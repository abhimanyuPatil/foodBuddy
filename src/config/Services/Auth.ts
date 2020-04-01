import {asyncStorage} from '@oppilio/common/utils';
import {ACCESS_TOKEN} from 'config/variables';

class Auth {
  public static createSession(token: string) {
    return asyncStorage.setItem(ACCESS_TOKEN, token);
  }

  public static removeSession() {
    return asyncStorage.removeItem(ACCESS_TOKEN);
  }

  public static async validateSession() {
    return await asyncStorage.getItem(ACCESS_TOKEN);
  }
}

export default Auth;
