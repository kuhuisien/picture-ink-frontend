import { Routes, Route } from 'react-router-dom';
import { ROUTING } from '../common/constants/routing';
import NavigationBar from '../common/components/NavigationBar';

const App = () => {
  return (
    <>
      <NavigationBar />
      <div className={'flex flex-col h-screen pt-16 px-6'}>
        <Routes>
          {ROUTING.map(({ to, component }) => (
            <Route key={to} path={to} element={component} />
          ))}
        </Routes>
      </div>
    </>
  );
};

export default App;
