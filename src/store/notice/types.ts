export type Reducer = (state: State, action: Action) => State;

export interface State {
  loading: undefined | boolean,
  newResourceAgentId: undefined | number // 当前打正在添加 resource 的 agent ID
};

export type Action =
  | { type: 'START' }
  | { type: 'STOP' }
  | { type: 'NEW_RESOURCE', payload: number }
  | { type: 'CLOSE_RESOURCE' };
