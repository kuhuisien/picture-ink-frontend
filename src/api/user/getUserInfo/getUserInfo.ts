import axios from 'axios';
import { GET_USER_INFO_URL } from '../../resources/configs/URL';
import { parseResponse, parseError } from '../../resources/handlers';
import { formatGetUserInfoErrorMessage } from '../../resources/messages/errorMessage';
import { IGetUserInfoPayload } from './getUserInfo.fromApi.types';

/**
 * get user info
 * @returns user info object
 */
const getUserInfo = async (): Promise<IGetUserInfoPayload> => {
  try {
    const response = await axios.get<IGetUserInfoPayload>(GET_USER_INFO_URL, {
      withCredentials: true
    });
    return parseResponse(response, GET_USER_INFO_URL);
  } catch (error) {
    const defaultMsg = formatGetUserInfoErrorMessage(GET_USER_INFO_URL);
    const errorMsg = parseError(error, defaultMsg);
    console.error(errorMsg);
    throw new Error(errorMsg);
  }
};

export { getUserInfo };
