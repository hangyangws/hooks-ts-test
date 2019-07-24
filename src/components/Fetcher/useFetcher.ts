import { useState, useEffect } from 'react';
import { UseFetcherProps } from './types';

const useFetcher = (props: UseFetcherProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await props.action();
        if (response.status === 200) {
          setData(response.data);
        } else {
          throw Error(response.statusText);
        }
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [props, props.action]);

  return { data, loading, error };
};

export default useFetcher;
