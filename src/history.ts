import { createBrowserHistory, createHashHistory } from 'history';
import { BASE_NAME } from '@config/index';
import { isDev } from '@utils/isDev';

const history = isDev ? createHashHistory : createBrowserHistory;

export default history({
  basename: BASE_NAME,
});
