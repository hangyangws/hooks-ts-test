import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import logoUrl from '@resource/icons/logo.svg';

import { Props } from 'src/types';

import './index.scss';

const Logo = (props: Props) => (
  <Link to="/" className={cx(props.className, 'logo')}>
    <img className="logo-img" src={logoUrl} alt="CRULSE" />
  </Link>
);

export default Logo;
