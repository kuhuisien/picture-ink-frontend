import { useState, useEffect, useRef } from 'react';
import { GOOGLE_SIGN_OUT_URL } from '../../../../api/resources/configs/URL';
import { UserAvatarProps } from './UserAvatar.types';

const UserAvatar = ({ username, email, picture }: UserAvatarProps) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null); // Create a ref for the menu container
  const avatarRef = useRef<HTMLImageElement>(null);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // close the menu if clicked outside
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        avatarRef.current &&
        !avatarRef.current.contains(event.target as Node)
      ) {
        setIsMenuVisible(false);
      }
    };

    // Add event listener for clicks outside
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const toggleMenu = () => setIsMenuVisible((prev) => !prev);

  const onClickSignout = () => {
    window.location.href = GOOGLE_SIGN_OUT_URL;
  };

  return (
    <div className="flex flex-col items-end">
      {/* Avatar */}
      <img
        ref={avatarRef}
        src={picture}
        alt={username}
        className="w-10 h-10 rounded-full cursor-pointer"
        referrerPolicy="no-referrer"
        onClick={toggleMenu}
      />

      {/* Dropdown Menu */}
      {isMenuVisible && (
        <div ref={menuRef} className="bg-white border border-gray-300 rounded-lg shadow-lg p-4">
          <p className="mb-2 text-sm font-bold text-gray-700">{email}</p>
          <ul className="space-y-2">
            <li
              className="cursor-pointer text-blue-600 hover:text-blue-800"
              onClick={onClickSignout}>
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
