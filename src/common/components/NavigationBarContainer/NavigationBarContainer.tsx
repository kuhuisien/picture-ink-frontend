import { useContext } from 'react';
import { AuthContext } from '../../hooks/AuthContextProvider/AuthContext';
import NavigationBar from './NavigationBar/NavigationBar';

const NavigationBarContainer = () => {
  const authContext = useContext(AuthContext);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { token, ...rest } = authContext ?? { token: '', username: '', email: '', picture: '' };

  return <NavigationBar {...rest} />;
};

export default NavigationBarContainer;
