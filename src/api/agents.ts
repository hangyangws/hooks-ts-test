import axios from 'axios';

import { apiHost } from '@config/index';
import { Item } from '@store/agents/types';

export async function getAll() {
  return axios({
    url: `${apiHost}/agents`,
    method: 'get'
  });
};

export async function modify(data: Item) {
  return axios({
    url: `${apiHost}/agents/${data.id}`,
    method: 'PUT',
    data
  });
};
