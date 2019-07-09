import React from 'react';
import cx from 'classnames';

import { Props } from 'src/types';

import './index.scss';

const Footer = (props: Props) => (
  <footer className={cx(props.className, 'footer')}>
    &copy; Copyright 2019&ensp;
    <a href="//www.thoughtworks.com/" target="_blank">
      <span className="footer-name">Thought</span>works
    </a>
  </footer>
);

export default Footer;
