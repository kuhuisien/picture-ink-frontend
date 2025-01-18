import { createContext } from 'react';
import { IGetUserInfoPayload } from '../../../api/user/getUserInfo/getUserInfo.fromApi.types';

export const AuthContext = createContext<IGetUserInfoPayload | null | undefined>(null);
