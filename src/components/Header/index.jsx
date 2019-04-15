import React from 'react';
import cx from 'classnames';

import Logo from 'Components/Logo';
import User from 'Components/User';

import './index.scss';

const Header = props => (
  <header className={cx(props.className, 'header')}>
    <div className="header-content">
      <Logo />
      <User className="header-user" />
    </div>
  </header>
);

export default Header;
