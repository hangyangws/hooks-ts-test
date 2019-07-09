import React from 'react';
import cx from 'classnames';

import Logo from '@components/Logo';
import User from '@components/User';

import { Props } from 'src/types';

import './index.scss';

const Header = (props: Props) => (
  <header className={cx(props.className, 'header')}>
    <div className="header-content">
      <Logo />
      <User className="header-user" />
    </div>
  </header>
);

export default Header;
