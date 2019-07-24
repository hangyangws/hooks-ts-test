import { getAll, modify } from '@api/agents';

import { State, Action, Agent } from './types';
import { setIn } from 'immutable';

const applyMiddleware = (
  state: State,
  dispatch: React.Dispatch<Action>
) => async (action: Action) => {
  // middleware 逻辑
  switch (action.type) {
    case 'AGENTS_FETCH': {
      if (state.agents.length) {
        // 数据缓存
        return;
      }
      try {
        const serverResponse = await getAll();
        dispatch({
          type: 'AGENTS_INIT',
          payload: serverResponse.data
        });
      } catch (e) {
        console.log(e);
      }
      return;
    }
    case 'RESOURCES_DELETE': {
      const oldAgent = state.agents.find(
        item => item.id === action.payload.id
      ) as Agent;
      const newAgent = setIn(
        oldAgent,
        ['resources'],
        oldAgent.resources.filter((_, index) => index !== action.payload.data)
      );

      try {
        await modify(newAgent);

        dispatch({
          type: 'RESOURCES_DELETE',
          payload: action.payload
        });
      } catch (e) {
        console.log(e);
      }
      return;
    }
    case 'RESOURCES_ADD': {
      const oldAgent = state.agents.find(
        item => item.id === action.payload.id
      ) as Agent;
      const newAgent = setIn(
        oldAgent,
        ['resources'],
        [...oldAgent.resources, ...action.payload.data]
      );

      try {
        await modify(newAgent);

        dispatch(action);
      } catch (e) {
        console.log(e);
      }

      return;
    }
  }

  // 继续默认的 dispatch 逻辑
  dispatch(action);
};

export default applyMiddleware;
