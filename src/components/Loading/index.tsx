import React from 'react';
import Notice from '@store/notice/index';

import './index.scss';

const Loading = () => {
  const { state } = React.useContext(Notice.Context);

  return state.loading
    ? (
      <div className="loading">
        <div className="loading-content">
          <div className="loading-bounce1"></div>
          <div className="loading-bounce2"></div>
        </div>
      </div>
    )
    : null;
};

export default Loading;
