import { Plugin } from '@nuxt/types';
import { initializeAxios } from './axios-instance';

const accessor: Plugin = ({ $axios }) => {
  initializeAxios($axios);
};

export default accessor;
