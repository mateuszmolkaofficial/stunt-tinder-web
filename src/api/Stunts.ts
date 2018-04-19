import axios from 'axios';
import InterfaceStunt from '../interfaces/InterfaceStunt';

export const fetchStunts = (): Promise<InterfaceStunt[]> => {
  return axios.get('http://www.mocky.io/v2/5ad89ec73000000f00e5891b')
    .then((response: any) => response.data.data)
    .catch((err: Error) => {
      throw new Error('Error fetching events' + err);
    });
};