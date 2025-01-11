import { NavLink } from 'react-router-dom';
import { ROUTING } from '../../constants/routing';

const DesktopNavigation = () => {
  return (
    <nav className="hidden md:block">
      <div className="space-x-6 font-medium text-gray-900">
        {ROUTING.map((x) => (
          <NavLink
            key={x.to}
            className={({ isActive }) => (isActive ? 'underline hoverable' : 'hoverable')}
            {...x}>
            {x.displayText}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default DesktopNavigation;
