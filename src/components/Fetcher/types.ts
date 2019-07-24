import { PromiseReturn } from '@api/types';

export interface UseFetcherProps {
  action(props?: any): PromiseReturn;
  data?: any;
}

export interface FetcherProps extends UseFetcherProps {
  children(props?: any): any;
}
