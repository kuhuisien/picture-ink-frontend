import GenerateImage from '../../Pages/GenerateImage';
import Home from '../../Pages/Home';

export const ROUTING_PATH = {
  HOME: '/',
  GENERATE_IMAGE: '/generateImage'
};

export const ROUTING = [
  {
    to: ROUTING_PATH.HOME,
    displayText: 'Home',
    component: <Home />
  },
  {
    to: ROUTING_PATH.GENERATE_IMAGE,
    displayText: 'Generate Image',
    component: <GenerateImage />
  }
];
