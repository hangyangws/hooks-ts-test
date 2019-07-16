import { Action, State, Item } from './types';

const reducer = (state: State, action: Action) => {
  state = state || [];

  switch (action.type) {
    case 'INIT':
      return [...(action.payload as Item[])];
    case 'ADD_RESOURCES': {
      const { payload } = action;

      return state.map(agent =>
        agent.id === payload.id
          ? {
              ...agent,
              resources: [...agent.resources, ...payload.data],
            }
          : agent,
      );
    }
    case 'DELETE_RESOURCES': {
      const { payload } = action;

      return state.map(agent =>
        agent.id === payload.id
          ? {
              ...agent,
              resources: agent.resources.filter(
                (_, index) => index !== payload.data,
              ),
            }
          : agent,
      );
    }
    default:
      return state;
  }
};

export default reducer;
