import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserInfo } from '../../../api/user/getUserInfo/getUserInfo';
import { IGetUserInfoPayload } from '../../../api/user/getUserInfo/getUserInfo.fromApi.types';
import { AuthContext } from './AuthContext';
import { SESSION_STORAGE } from '../../constants/sessionStorage';
import { ROUTING_PATH } from '../../constants/routing';

interface AuthContextProviderProps {
  children: React.ReactNode;
}

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<IGetUserInfoPayload | null | undefined>();
  const isLoggedIn = !!user;

  useEffect(() => {
    const fetchDataAsync = async () => {
      const userInfo = await getUserInfo();
      sessionStorage.setItem(SESSION_STORAGE.TOKEN, userInfo?.token ?? '');
      setUser(userInfo);
    };

    fetchDataAsync().catch(() => {
      void navigate(ROUTING_PATH.HOME);
    });
  }, []);

  return <AuthContext.Provider value={{ ...user, isLoggedIn }}>{children}</AuthContext.Provider>;
};

export { AuthContextProvider };
