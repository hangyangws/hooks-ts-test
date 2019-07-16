import React from 'react';
import cx from 'classnames';

import { Props } from 'src/types';

import './index.scss';

interface SearchProps extends Props {
  value: string;
  onSearch(value: string): void;
  placeholder: string;
}

const SearchInput = (props: SearchProps) => {
  const [value, setValue] = React.useState(props.value);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSearch = () => {
    if (props.onSearch) {
      props.onSearch(value);
    }
  };
  const handleKeyup = (e: React.KeyboardEvent) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };

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
