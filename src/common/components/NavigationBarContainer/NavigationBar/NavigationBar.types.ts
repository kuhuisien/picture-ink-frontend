import { IGetUserInfoPayload } from '../../../../api/user/getUserInfo/getUserInfo.fromApi.types';

export type NavigationBarProps = Omit<IGetUserInfoPayload, 'token'>;
