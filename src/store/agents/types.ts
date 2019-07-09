export type Resources = ('Firefox' | 'Safari' | 'Ubuntu' | 'Chrome')[];
export type Os = 'centos' | 'debian' | 'suse' | 'ubuntu' | 'windows';

export interface AddResources {
  id: number;
  data: Resources; // 表示要添加的资源
};
export interface DeleteResources {
  id: number;
  data: number; // 表示要删除的资源的序号
};

export type Reducer = (state: State, action: Action) => State;

export interface Item {
  name: string;
  os: Os;
  status: string;
  type: string;
  ip: string;
  location: string;
  resources: Resources;
  id: number;
};

export type State = Item[];

export type Action =
  | { type: 'INIT', payload: Item[] }
  | { type: 'ADD_RESOURCES', payload: AddResources }
  | { type: 'DELETE_RESOURCES', payload: DeleteResources };
