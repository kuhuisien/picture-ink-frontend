import GenerateImage from '../../Pages/GenerateImage';
import Home from '../../Pages/Home';

export const ROUTING = [
  {
    to: '/',
    displayText: 'Home',
    component: <Home />
  },
  {
    to: '/generateImage',
    displayText: 'Generate Image',
    component: <GenerateImage />
  }
];
