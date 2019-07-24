import axios from 'axios';

import { apiHost } from '@config/index';
import { Agent } from '@store/types';
import { PromiseReturn } from './types';

export const getAll = async (): PromiseReturn =>
  axios({
    url: `${apiHost}/agents`,
    method: 'get'
  });

export const modify = async (data: Agent): PromiseReturn =>
  axios({
    url: `${apiHost}/agents/${data.id}`,
    method: 'PUT',
    data
  });
