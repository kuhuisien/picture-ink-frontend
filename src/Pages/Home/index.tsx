import { useNavigate } from 'react-router-dom';
import { ROUTING_PATH } from '../../common/constants/routing';
import { useContext } from 'react';
import { AuthContext } from '../../common/hooks/AuthContextProvider/AuthContext';
import { GOOGLE_SIGN_IN_URL } from '../../api/resources/configs/URL';

const Home = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const onStartButtonClick = () => {
    if (isLoggedIn) {
      void navigate(ROUTING_PATH.GENERATE_IMAGE);
    } else {
      // signin to google
      window.location.href = GOOGLE_SIGN_IN_URL;
    }
  };

  return (
    <div className="h-3/4 flex flex-col items-center justify-center py-10">
      <h1 className="text-6xl text-center text-primary-color font-bold animate__fadeIn animate-pulse pb-4">
        {import.meta.env.VITE_APP_NAME}
      </h1>
      <p className="items-center">In every word lies a world to be inked.</p>
      <p className="items-center">PictureInk creates timeless art from your imagination. </p>

      <button
        onClick={onStartButtonClick}
        className="mt-8 bg-primary-color text-white py-3 px-8 rounded-lg text-xl font-semibold shadow-xl transform hover:scale-105 transition-all duration-300">
        Start Creating Art
      </button>
    </div>
  );
};

export default Home;
