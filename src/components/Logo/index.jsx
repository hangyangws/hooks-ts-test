import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import logoUrl from 'Resource/icons/logo.svg';

import './index.scss';

const Logo = props => (
  <Link to="/" className={cx(props.className, 'logo')}>
    <img
      className="logo-img"
      src={logoUrl}
      alt="CRULSE"
    />
  </Link>
);

export default Logo;
