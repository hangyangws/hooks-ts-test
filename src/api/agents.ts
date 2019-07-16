import axios, { AxiosResponse } from 'axios';

import { apiHost } from '@config/index';
import { Item } from '@store/agents/types';

export async function getAll(): Promise<AxiosResponse> {
  return axios({
    url: `${apiHost}/agents`,
    method: 'get'
  });
}

export async function modify(data: Item): Promise<AxiosResponse> {
  return axios({
    url: `${apiHost}/agents/${data.id}`,
    method: 'PUT',
    data
  });
}
