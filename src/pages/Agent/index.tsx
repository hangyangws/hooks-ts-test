import React from 'react';

import request from '@api/request';
import {
  useDispatch as useNoticeDispatch
} from '@store/notice/index';
import {
  useDispatch as useAgentsDispatch,
  useState as useAgentsState
} from '@store/agents/index';

import AllView from './AllView';
import List from './List';
import { AgentItemsProps } from "./types";

import './index.scss';

const SitesList = () => {
  const agentsDispatch = useAgentsDispatch();
  const agents = useAgentsState();
  const noticeDispatch = useNoticeDispatch();

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
