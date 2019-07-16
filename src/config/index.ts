import { isDev } from '../utils/isDev';

export const BASE_NAME = isDev ? '/' : '/';

// TODO：非 dev 环境替换为线上地址
export const apiHost = isDev
  ? 'http://localhost:3001'
  : 'http://localhost:3001';
