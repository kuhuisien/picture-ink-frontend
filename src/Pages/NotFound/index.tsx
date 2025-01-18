import { useNavigate } from 'react-router-dom';
import { ROUTING_PATH } from '../../common/constants/routing';

const NotFound = () => {
  const navigate = useNavigate();

  const onGoToHomeButtonClick = () => {
    void navigate(ROUTING_PATH.HOME, { replace: true });
  };

  return (
    <div className="flex flex-col items-center justify-center h-2/3 text-center">
      <h1 className="text-6xl font-bold text-grey-600">404</h1>
      <p className="text-xl text-gray-700 mb-4">Oops! Page not found.</p>

      <button
        onClick={onGoToHomeButtonClick}
        className="mt-4 bg-primary-color text-white py-3 px-8 rounded-lg text-xl font-semibold shadow-xl transform hover:scale-105 transition-all duration-300">
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
