import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import get from 'lodash/get';
import cx from 'classnames';

import asideRouter from '@config/asideRouter';
import { RoutedProps } from 'src/types';

import './index.scss';

const historyList = [
  'bjstdmngbgr02/Acceptance_test',
  'bjstdmngbgr03/Acceptance_test',
  'bjstdmngbgr04/Acceptance_test',
  'bjstdmngbgr05/Acceptance_test',
  'bjstdmngbgr06/Acceptance_test',
];
const History = () => (
  <div className="aside-history">
    <h3 className="aside-historyTitle">History</h3>
    <ul>
      {historyList.map((item, index) => (
        <li className="aside-historyItem" key={index}>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Aside = withRouter((props: RoutedProps) => {
  const url = get(props, 'match.url');

  return (
    <aside className={cx('aside', props.className)}>
      <nav className="aside-content">
        {asideRouter.map(item => (
          <NavLink
            activeClassName="active"
            className="aside-item"
            key={item.path}
            location={props.location}
            to={`${url}${item.path}`}
          >
            <i className={`icon-${item.icon} aside-itemIcon`} />
            {item.name}
          </NavLink>
        ))}
      </nav>
      <History />
    </aside>
  );
});

export default Aside;
