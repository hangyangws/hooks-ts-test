import React from 'react';

import request from '@api/request';
import Agents from '@store/agents/index';
import Notice from '@store/notice/index';

import AllView from './AllView';
import List from './List';
import { AgentItemsProps } from "./types";

import './index.scss';

const SitesList = () => {
  const { state: agents, dispatch: agentsDispatch } = React.useContext(Agents.Context);
  const { dispatch: noticeDispatch } = React.useContext(Notice.Context);

  React.useEffect(() => {
    if (!agents) {
      // 请求数据
      request({
        noticeDispatch,
        apiPath: 'agents/getAll',
        callBack: (responseData: AgentItemsProps) => {
          agentsDispatch({ type: 'INIT', payload: responseData.data });
        }
      });
    }
  }, []);

  if (!agents) {
    return null;
  }

  if (!agents.length) {
    return <p className="agent-empty">数据为空</p>;
  }

  return (
    <div className="agent">
      <AllView className="agent-allView" data={agents} />
      <List className="agent-list" data={agents} />
    </div>
  );
};

export default SitesList;
