import ApiHost from './apiHost';
import Http from './Http';
import Auth from './Auth';
import { BASE_URL } from '../constants';
export { ApiHost, Http, Auth };
export const apiHost = new ApiHost(BASE_URL);
const PLACES_AUTOCOMPLETE = '/api/location/autocomplete';
export class Services {

}
