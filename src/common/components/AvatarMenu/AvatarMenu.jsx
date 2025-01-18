import { useState } from 'react';

const AvatarMenu = (user) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoutButtonClick = () => {};

  const getInitial = () => {
    if (!user?.name) return '';

    // get the name first letter and capitalize it
    return user.name.charAt(0).toUpperCase();
  };

  return (
    <div className="relative inline-block">
      {/* Avatar */}
      <div
        onClick={toggleMenu}
        className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center cursor-pointer text-lg overflow-hidden">
        {user.profilePicture ? (
          <img
            src={user.profilePicture}
            alt="Avatar"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null; // Prevent infinite loop
              e.target.src = ''; // Reset the src if the image fails to load
            }}
          />
        ) : (
          <span>{getInitial(user.username)}</span>
        )}
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
          {/* User Info */}
          <div className="border-b border-gray-200 p-4">
            <p className="text-sm font-bold">{user.username || 'Unknown User'}</p>
            <p className="text-xs text-gray-500">{user.email || 'No email available'}</p>
          </div>

          {/* Menu Items */}
          <button
            className="w-full text-left px-4 py-2 hover:bg-blue-100 text-blue-700 font-medium"
            onClick={() => alert('Item1 clicked!')}>
            Item1
          </button>
          <button
            className="w-full text-left px-4 py-2 hover:bg-green-100 text-green-700 font-medium"
            onClick={() => alert('Item2 clicked!')}>
            Item2
          </button>
          <button
            className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-700 font-medium"
            onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default AvatarMenu;
