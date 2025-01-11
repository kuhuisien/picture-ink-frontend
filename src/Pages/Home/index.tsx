const Home = () => {
  return (
    <div className="h-3/4 flex flex-col items-center justify-center py-10">
      <h1 className="text-6xl text-center text-primary-color font-bold animate__fadeIn animate-pulse pb-4">
        {import.meta.env.VITE_APP_NAME}
      </h1>
      <p>In every word lies a world to be inked.</p>
      <div>PictureInk creates timeless art from your imagination. </div>

      <div className="mt-8">
        <button className="bg-primary-color text-white py-3 px-8 rounded-lg text-xl font-semibold shadow-xl transform hover:scale-105 transition-all duration-300">
          Start Creating Art
        </button>
      </div>
    </div>
  );
};

export default Home;
