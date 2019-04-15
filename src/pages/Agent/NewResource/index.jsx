import React from 'react';
import cx from 'classnames';

import request from 'Api/request';
import Notice from 'Store/notice/index';
import Agents from 'Store/agents/index';

import Button from 'Components/Button';

import './index.scss';

const NewResource = (props) => {
  const { state: notice, dispatch: noticeDispatch } = React.useContext(Notice.Context);
  const { dispatch: agentsDispatch } = React.useContext(Agents.Context);
  const [resource, setResource] = React.useState('');

  if (notice.newResourceAgentId !== props.data.id) {
    return null;
  }

  const handleClose = () => {
    noticeDispatch({
      type: 'CLOSE_RESOURCE'
    });
    setResource('');
  };
  const handleChangeResource = (e) => {
    setResource(e.target.value);
  };
  const handleAddResources = () => {
    if (resource) {
      const newResource = resource.split(/,|，/);
      const newItem = {
        ...props.data,
        resources: [
          ...props.data.resources,
          ...newResource
        ]
      };
      request({
        noticeDispatch,
        apiPath: 'agents/modify',
        callBack: () => {
          agentsDispatch({
            type: 'ADD_RESOURCES',
            payload: {
              id: props.data.id,
              data: newResource
            }
          });
          setResource('');
        }
      }, newItem);
    }
    handleClose();
  };

  return (
    <React.Fragment>
      <div className="newResource-mask" onClick={handleClose} />
      <div className={cx('newResource', props.className)}>
        <i className="newResource-arrow" />
        <i onClick={handleClose} className="newResource-icon icon-close" />
        <p className="newResource-title">Separate multiple resource name with commas</p>
        <input
          value={resource}
          onChange={handleChangeResource}
          className="newResource-input"
          type="text"
          placeholder="Input value"
        />
        <div className="newResource-button">
          <Button onClick={handleAddResources}>Add Resources</Button>
          <Button gray onClick={handleClose}>Cancel</Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewResource;
