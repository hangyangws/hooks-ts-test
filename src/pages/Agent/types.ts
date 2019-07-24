import { RouteComponentProps } from 'react-router-dom';
import { Agent } from '@store/types';

export interface RoutedAgentItemsProps extends RouteComponentProps {
  className?: string;
  data: Agent[];
}

export interface AgentItemsProps {
  className?: string;
  data: Agent[];
}

export interface RoutedAgentTypeProps extends RouteComponentProps {
  className?: string;
  data: string[];
}

export interface AgentItemProps {
  className?: string;
  data: Agent;
}
