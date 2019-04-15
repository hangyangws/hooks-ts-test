export const initState = {
  loading: undefined,
  dialog: undefined,
  newResourceAgentId: undefined // 当前打正在添加 resource 的 agent ID
};

const reducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case 'START':
      return { ...state, loading: true };
    case 'STOP':
      return { ...state, loading: false };
    case 'DIALOG':
      return { ...state, dialog: payload };
    case 'CLOSE_DIALOG':
      return { ...state, dialog: undefined };
    case 'NEW_RESOURCE':
      return { ...state, newResourceAgentId: payload };
    case 'CLOSE_RESOURCE':
      return { ...state, newResourceAgentId: undefined };
    default:
      return state;
  }
};

export default reducer;
