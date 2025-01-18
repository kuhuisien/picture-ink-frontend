import DesktopNavigation from '../DesktopNavigation/DesktopNavigation';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import UserAvatar from '../UserAvatar/UserAvatar';
import { NavigationBarProps } from './NavigationBar.types';

const NavigationBar = (props: NavigationBarProps) => {
  const isSignedIn = !!props.email;

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
        <></>
      )}
    </header>
  );
};

export default NavigationBar;
