import React from 'react';
import cx from 'classnames';

import { getAgentStatusMap, getAgentTypeList } from '@utils/index';
import { AgentItemsProps } from '../types';

import './index.scss';

const AllView = (props: AgentItemsProps) => {
  const { building, idle } = getAgentStatusMap(props.data);
  const typeList = getAgentTypeList(props.data);

  return (
    <div className={cx(props.className, 'agentAllView')}>
      <div className="agentAllView-building">
        <i className="icon-cog" />
        <h4>Building</h4>
        <span>{building}</span>
      </div>
      <div className="agentAllView-idie">
        <i className="icon-coffee" />
        <h4>IdIe</h4>
        <span>{idle}</span>
      </div>
      <ul className="agentAllView-type">
        {typeList.map(type => (
          <li key={type.name} className="agentAllView-typeItem">
            <span className="agentAllView-typeName">{type.name.toUpperCase()}</span>
            <span className="agentAllView-typeNumber">{type.number}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllView;
