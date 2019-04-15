import axios from 'axios';

import { apiHost } from 'Config';

export async function getAll() {
  return axios({
    url: `${apiHost}/agents`,
    method: 'get'
  });
}

export async function modify(data) {
  return axios({
    url: `${apiHost}/agents/${data.id}`,
    method: 'PUT',
    data,
  });
}
