import React from 'react';

import { Props } from 'src/types';
import reducer from './reducer';
import { Action, State } from './types';

export const initState: State = [];

const stateCtx = React.createContext(initState);
const dispatchCtx = React.createContext((() => 0) as React.Dispatch<Action>);

export const Provider: React.ComponentType = (props: Props) => {
  const [state, dispatch] = React.useReducer(reducer, initState);

  return (
    <dispatchCtx.Provider value={dispatch}>
      <stateCtx.Provider value={state}>
        {props.children}
      </stateCtx.Provider>
    </dispatchCtx.Provider>
  );
};

export const useDispatch = () => {
  return React.useContext(dispatchCtx);
};

export const useState = () => {
  return React.useContext(stateCtx);
};
