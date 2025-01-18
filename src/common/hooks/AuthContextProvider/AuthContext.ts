import { createContext } from 'react';
import { IGetUserInfoPayload } from '../../../api/user/getUserInfo/getUserInfo.fromApi.types';

type AuthContextType = Partial<IGetUserInfoPayload> & { isLoggedIn: boolean };

export const AuthContext = createContext<AuthContextType>({ isLoggedIn: false });
