import axios from 'axios';
import InterfaceStunt from '../interfaces/InterfaceStunt';

export const fetchStunts = (): Promise<InterfaceStunt[]> => {
  return axios.get('http://www.mocky.io/v2/5ad84ff83000007000e5870c')
    .then((response: any) => response.data.data)
    .catch((err: Error) => {
      throw new Error('Error fetching events' + err);
    });
};