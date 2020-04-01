import { AxiosRequestConfig, AxiosResponse } from 'axios';
import Http from './Http';
import asyncStorage from '../../utils/asyncStorage';
import { ACCESS_TOKEN } from '../constants';

/**
 * 😸 this class expose methods to call apis
 * 🔴 use them only if it is required to call api
 * outside of react component otherwise use "use-fetch-lib"🙏🏾
 */
class ApiHost extends Http {
  private static getToken(): Promise<string> {
    return asyncStorage
      .getItem(ACCESS_TOKEN)
      .then(tkn => {
        return tkn;
      })
      .catch(() => {
        return '';
      });
  }

  constructor(BASE_URL: string) {
    super(BASE_URL);
  }

  private prep(caller: (x: string) => Promise<AxiosResponse<any>>) {
    return ApiHost.getToken().then(caller);
  }

  public get = (url: string, data?: any, options?: AxiosRequestConfig) =>
    this.prep(token => super.get(url, token, data, options));

  public post = (url: string, data: any, options?: AxiosRequestConfig) =>
    this.prep(token => super.post(url, token, data, options));

  public put = (url: string, data: any, options?: AxiosRequestConfig) =>
    this.prep(token => super.put(url, token, data, options));

  public delete = (url: string, data: any, options?: AxiosRequestConfig) =>
    this.prep(token => super.delete(url, token, data, options));
}

export default ApiHost;
