import React, { useReducer } from 'react';
import reducer, { initState } from './reducer';

const Context = React.createContext();

const Provider = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};

export default { Context, Provider };
