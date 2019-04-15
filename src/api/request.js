import API from './index';

const request = ({
  noticeDispatch,
  apiPath,
  callBack
}, ...rest) => {
  const apiPathList = apiPath.split('/');
  const requestMethod = API[apiPathList[0]][apiPathList[1]];

  if (noticeDispatch) {
    noticeDispatch({ type: 'START' });
  }

  requestMethod(...rest)
    .then((response) => {
      callBack(response);

      if (noticeDispatch) {
        noticeDispatch({ type: 'STOP' });
      }
    })
    .catch(err => {
      console.log(err.message);
      callBack(false);
      if (noticeDispatch) {
        noticeDispatch({ type: 'STOP' });
      }
    });
};

export default request;
