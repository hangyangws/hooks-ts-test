import React from 'react';
import cx from 'classnames';

import './index.scss';

const SearchInput = (props) => {
  const [value, setValue] = React.useState(props.value);
  const handleInput = (e) => {
    setValue(e.target.value);
  };
  const handleSearch = () => {
    if (props.onSearch) {
      props.onSearch(value);
    }
  };
  const handleKeyup = (e) => {
    if(e.keyCode === 13) {
      handleSearch();
    }
  }

  return (
    <div className={cx(props.className, 'searchInput')}>
      <i onClick={handleSearch} className="searchInput-icon icon-search" />
      <input
        value={value}
        onKeyUp={handleKeyup}
        onChange={handleInput}
        placeholder={props.placeholder || ''}
        className="searchInput-input"
        type="text"
      />
    </div>
  );
};

export default SearchInput;
