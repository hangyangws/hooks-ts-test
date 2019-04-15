import React from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import cx from 'classnames';

import SearchInput from 'Components/SearchInput';

import './index.scss';

const TypeNav = withRouter((props) => {
  const { type = 'All', keywords = '' } = queryString.parse(props.location.search);

  const handleSearch = (val) => {
    props.history.push({
      ...props.history.location,
      search: queryString.stringify({
        type,
        keywords: val
      })
    });
  };
  const handleChangeType = val => () => {
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
            onClick={type === typeName ? null : handleChangeType(typeName)}
            key={typeName}>
            {typeName}
          </li>
        ))}
      </ul>
      <SearchInput value={keywords} onSearch={handleSearch} placeholder="搜索 name" />
    </div>
  );
});

export default TypeNav;
