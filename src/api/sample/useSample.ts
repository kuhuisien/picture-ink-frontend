import { useQuery } from '@apollo/client';
import { GET_LOCATIONS } from './query';

export const useSample = () => {
  return useQuery(GET_LOCATIONS);
};
