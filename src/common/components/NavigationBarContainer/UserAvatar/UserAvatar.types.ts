import { IGetUserInfoPayload } from '../../../../api/user/getUserInfo/getUserInfo.fromApi.types';

export type UserAvatarProps = Omit<IGetUserInfoPayload, 'token'>;
