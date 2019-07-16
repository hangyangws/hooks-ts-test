import React from 'react';
import cx from 'classnames';

import request from '@api/request';
import {
  useDispatch as useNoticeDispatch,
  useState as useNoticeState,
} from '@store/notice/index';
import { useDispatch as useAgentsDispatch } from '@store/agents/index';
import Button from '@components/Button';

import { AgentItemProps } from '../types';

import './index.scss';
import { AddResources, Resources } from '@store/agents/types';

const NewResource = (props: AgentItemProps) => {
  const noticeDispatch = useNoticeDispatch();
  const notice = useNoticeState();
  const agentsDispatch = useAgentsDispatch();
  const [resource, setResource] = React.useState('');

  if (notice.newResourceAgentId !== props.data.id) {
    return null;
  }

  const handleClose = () => {
    noticeDispatch({
      type: 'CLOSE_RESOURCE',
    });
    setResource('');
  };
  const handleChangeResource = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResource(e.target.value);
  };
  const handleAddResources = () => {
    if (resource) {
      const newResource = resource.split(/,|，/);
      const newItem = {
        ...props.data,
        resources: [...props.data.resources, ...newResource],
      };
      const payload: AddResources = {
        id: props.data.id,
        data: newResource as Resources,
      };
      request(
        {
          noticeDispatch,
          apiPath: 'agents/modify',
          callBack: () => {
            agentsDispatch({
              type: 'ADD_RESOURCES',
              payload,
            });
            setResource('');
          },
        },
        newItem,
      );
    }
    handleClose();
  };

  return (
    <div className={cx('newResource', props.className)}>
      <i className="newResource-arrow" />
      <i onClick={handleClose} className="newResource-icon icon-close" />
      <p className="newResource-title">
        Separate multiple resource name with commas
      </p>
      <input
        value={resource}
        onChange={handleChangeResource}
        className="newResource-input"
        type="text"
        placeholder="Input value"
      />
      <div className="newResource-button">
        <Button onClick={handleAddResources}>Add Resources</Button>
        <Button gray onClick={handleClose}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default NewResource;
