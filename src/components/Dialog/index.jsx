import React from 'react';
import get from 'lodash/get';
import { Icon, Button } from '@alifd/next';

import Notice from 'Store/notice/index';

import './index.scss';

const Dialog = (props) => {
  const { title, footer, children, onClose, onCancel, onOk } = props;
  const scrollElement = React.useRef();

  // 事件
  const handleKeydown = (event) => {
    if (event.keyCode === 27) {
      onClose();
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeydown, false);

    return () => {
      document.removeEventListener('keydown', handleKeydown, false);
    };
  }, []);

  const Footer = (
    <div className="tas-dialog-footer">
      <Button className="tas-dialog-footerBtn" type="primary" onClick={onOk}>确认</Button>
      <Button className="tas-dialog-footerBtn" onClick={onCancel}>取消</Button>
    </div>
  );

  return (
    <div className="tas-dialog-mask">
      <div className="tas-dialog-wrap">
        <div className="tas-dialog-header">
          <h2>{title}</h2>
          <Icon onClick={onClose} className="tas-dialog-close" type="close" size="small" />
        </div>
        <div className="tas-dialog-content" ref={scrollElement}>
          {children || title}
        </div>
        {(typeof footer === 'undefined') || footer
          ? Footer
          : null
        }
      </div>
    </div>
  );
};

const Index = () => {
  const { state, dispatch: noticeDispatch } = React.useContext(Notice.Context);

  const handleClose = () => {
    noticeDispatch({ type: 'CLOSE_DIALOG' });
  };

  return get(state, 'dialog.title')
    ? (
      <Dialog
        onClose={handleClose}
        onCancel={handleClose}
        onOk={handleClose}
        {...state.dialog}
      />
    )
    : null;
};

export default Index;
