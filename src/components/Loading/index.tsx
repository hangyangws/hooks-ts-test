import React from 'react';
import { useState } from '@store/notice/index';

import './index.scss';

const Loading = () => {
  const state = useState();

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
