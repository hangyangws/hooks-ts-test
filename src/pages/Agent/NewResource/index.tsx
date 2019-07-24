import React from 'react';
import cx from 'classnames';

import { useDispatch, useStore } from '@store/index';
import { AddResources, Resources, Notice } from '@store/types';
import Button from '@components/Button';

import { AgentItemProps } from '../types';

import './index.scss';

const NewResource = (props: AgentItemProps) => {
  const dispatch = useDispatch();
  const { newResourceAgentId } = useStore('notice') as Notice;
  const [resource, setResource] = React.useState('');

  if (newResourceAgentId !== props.data.id) {
    return null;
  }

  const handleClose = () => {
    setResource('');
    dispatch({
      type: 'NOTICE_RESOURCE_CLOSE'
    });
  };
  const handleChangeResource = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResource(e.target.value);
  };
  const handleAddResources = async () => {
    if (resource) {
      const newResource = resource.split(/,|，/);
      const payload: AddResources = {
        id: props.data.id,
        data: newResource as Resources
      };

      await dispatch({
        type: 'RESOURCES_ADD',
        payload
      });

      handleClose();
    }
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
