import React from 'react';

import { useDispatch, useStore } from '@store/index';

import AllView from './AllView';
import List from './List';
import { Agent } from '@store/types';

import './index.scss';

const SitesList = () => {
  const dispatch = useDispatch();
  const agents = useStore('agents') as Agent[];

  React.useMemo(() => {
    dispatch({ type: 'AGENTS_FETCH' });
  }, [dispatch]);

  if (!agents.length) {
    return <p className="agent-empty">Data empty.</p>;
  }

  return (
    <div className="agent">
      <AllView className="agent-allView" data={agents} />
      <List className="agent-list" data={agents} />
    </div>
  );
};

export default SitesList;
