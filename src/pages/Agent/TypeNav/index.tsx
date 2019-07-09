import React from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import cx from 'classnames';

import SearchInput from '@components/SearchInput';
import { RoutedAgentTypeProps} from '../types'

import './index.scss';

const TypeNav = (props: RoutedAgentTypeProps) => {
  const { type = 'All', keywords = '' } = queryString.parse(props.location.search);

  const handleSearch = (val: string) => {
    props.history.push({
      ...props.history.location,
      search: queryString.stringify({
        type,
        keywords: val
      })
    });
  };
  const handleChangeType = (val: string) => () => {
    if (type === val) {
      return;
    }
    props.history.push({
      ...props.history.location,
      search: queryString.stringify({
        type: val,
        keywords
      })
    });
  };

  return (
    <div className={cx('agentTypeNav', props.className)}>
      <ul className="agentTypeNav-type">
        {props.data.map(typeName => (
          <li
            className={cx('agentTypeNav-typeName', { 'active': type === typeName })}
            onClick={handleChangeType(typeName)}
            key={typeName}>
            {typeName}
          </li>
        ))}
      </ul>
      <SearchInput value={keywords as string} onSearch={handleSearch} placeholder="搜索 name" />
    </div>
  );
};

export default withRouter(TypeNav);
