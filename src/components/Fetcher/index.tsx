import React from 'react';

import useFetcher from './useFetcher';
import { FetcherProps } from './types';

import './index.scss';

const Fetcher = (props: FetcherProps) => {
  const { data, loading, error } = useFetcher({
    action: props.action,
    data: props.data
  });

  if (loading) return <p>loading</p>;
  if (error) return <p>{error}</p>;
  if (!data) return null;

  return props.children(data);
};

export default Fetcher;
