import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import userOption from 'Config/userOption';
import userImg from 'Resource/icons/user.png';

import './index.scss';

const FuncList = () => (
  <nav className="user-func">
    {userOption.map(item => (
      <Link key={item.name} className="user-funcItem" to={item.path}>
        <i className={`icon-${item.icon}`} />
        <span>{item.name}</span>
      </Link>
    ))}
  </nav>
);

const User = props => (
  <div className={cx(props.className, 'user')}>
    <div className="user-content">
      <img
        src={userImg}
        className="user-img"
      />
      <i className="user-icon icon-angle-down" />
    </div>
    <FuncList />
  </div>
);

export default User;
