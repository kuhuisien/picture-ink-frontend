import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

const NavigationBar = () => {
  return (
    <header className="fixed h-14 bg-gray-50 w-full py-4 px-6 flex justify-between items-center z-50">
      {/* desktop menu */}
      <DesktopNavigation />

      {/* Mobile Menu */}
      <MobileNavigation />
    </header>
  );
};

export default NavigationBar;
