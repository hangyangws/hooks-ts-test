import React from 'react';
import cx from 'classnames';

import './index.scss';

const Button = (props) => {
  return (
    <button
      onClick={props.onClick || null}
      className={cx('button', props.className, {
        'button--isGray': props.gray
      })}>
      {props.children}
    </button>
  );
};

export default Button;
