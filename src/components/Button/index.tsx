import React from 'react';
import cx from 'classnames';

import { Props } from 'src/types';
import './index.scss';

interface BtnProps extends Props {
  gray?: boolean;
  onClick(): void;
};

const Button = (props: BtnProps) => {
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
