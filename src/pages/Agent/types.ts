import { RouteComponentProps } from 'react-router-dom';
import { Item } from '@store/agents/types';

export interface RoutedAgentItemsProps extends RouteComponentProps {
  className?: string;
  data: Item[]
};

export interface AgentItemsProps {
  className?: string;
  data: Item[]
};

export interface RoutedAgentTypeProps extends RouteComponentProps {
  className?: string;
  data: string[]
};

export interface AgentItemProps {
  className?: string;
  data: Item
};
