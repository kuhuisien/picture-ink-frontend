import { GOOGLE_SIGN_IN_URL } from '../../../../api/resources/configs/URL';
import DesktopNavigation from '../DesktopNavigation/DesktopNavigation';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import UserAvatar from '../UserAvatar/UserAvatar';
import { NavigationBarProps } from './NavigationBar.types';

const NavigationBar = (props: NavigationBarProps) => {
  console.log(props);
  const isSignedIn = !!props.email;

  const onClickSignin = () => {
    window.location.href = GOOGLE_SIGN_IN_URL;
  };

  return (
    <header
      className={
        'fixed h-14 w-full py-4 px-6 flex z-50 ' + (isSignedIn ? 'justify-between' : 'justify-end')
      }>
      {isSignedIn ? (
        <>
          {/* desktop menu */}
          <DesktopNavigation />

          {/* mobile menu */}
          <MobileNavigation />

          <UserAvatar {...props} />
        </>
      ) : (
        <button onClick={onClickSignin}>Login</button>
      )}
    </header>
  );
};

export default NavigationBar;
