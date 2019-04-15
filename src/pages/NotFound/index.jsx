import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const NotFound = () => (
  <div className="notfound">
    <h3 className="notfound-title">404</h3>
    <p>
      您要找的页面没有找到，请返回
      <Link to="/" className="notfound-home">首页</Link>
      继续浏览
    </p>
  </div>
);

export default NotFound;
