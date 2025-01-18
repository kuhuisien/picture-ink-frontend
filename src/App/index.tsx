import { Routes, Route } from 'react-router-dom';
import { ROUTING } from '../common/constants/routing';
//import { useSample } from '../api/sample/useSample';
import { AuthContextProvider } from '../common/hooks/AuthContextProvider';
import NavigationBarContainer from '../common/components/NavigationBarContainer/NavigationBarContainer';
import NotFound from '../Pages/NotFound';

const App = () => {
  // const { loading, error, data } = useSample();
  // console.log(loading, error, data);

  return (
    <AuthContextProvider>
      <NavigationBarContainer />

      <div className={'flex flex-col items-center h-screen pt-16 px-6'}>
        <Routes>
          {ROUTING.map(({ to, component }) => (
            <Route key={to} path={to} element={component} />
          ))}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </AuthContextProvider>
  );
};

export default App;
