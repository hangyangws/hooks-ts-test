import { createBrowserHistory, createHashHistory } from 'history';
import { BASE_NAME } from 'Config';
import { isDev } from 'Utils/isDev';

const history = isDev ? createHashHistory : createBrowserHistory;

export default history({
  basename: BASE_NAME,
});
