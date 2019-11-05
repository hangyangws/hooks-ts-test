import apiMaps from './index';
import { Request } from './types';

const request = (
  { noticeDispatch, apiPath, callBack }: Request,
  ...rest: any[]
) => {
  const [name, method] = apiPath.split('/');
  const requestMethod = apiMaps[name][method];

  if (noticeDispatch) {
    noticeDispatch({ type: 'START' });
  }

  requestMethod(...rest)
    .then((response: Response) => {
      callBack(response);

      if (noticeDispatch) {
        noticeDispatch({ type: 'STOP' });
      }
    })
    .catch(() => {
      callBack(false);
      if (noticeDispatch) {
        noticeDispatch({ type: 'STOP' });
      }
    });
};

export default request;
