import { Action as NoticeAction } from '@store/notice/types';
import { Action as AgentsAction } from '@store/agents/types';

type AllAction = NoticeAction | AgentsAction;

export interface Request {
  noticeDispatch(action: AllAction): void;
  apiPath: string;
  callBack(response: {}): void;
}
