/**
 * 本地 agents：
 * [
 * {
 *   "name": "bjstdmngbdr01.thoughtworks.com",
 *   "os": "windows",
 *   "status": "idle",
 *   "type": "physical",
 *   "ip": "192.168.1.102",
 *   "location": "/var/lib/cruise-agent",
 *   "resources": [
 *     "Firefox",
 *     "Safari",
 *     "Ubuntu",
 *     "Chrome"
 *   ],
 *   "id": 1
 * }]
 */
export const initState = undefined;

// 数据处理器
const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'INIT':
      return [...payload];
    case 'ADD_RESOURCES':
      // payload = {
      //   id: 1,
      //   data: ['Ubuntu']
      // }
      return state.map(agent => (agent.id === payload.id
        ? ({
          ...agent,
          resources: [
            ...agent.resources,
            ...payload.data
          ]
        })
        : agent
      ));
    case 'DELETE_RESOURCES':
      // payload = {
      //   id: 1,
      //   data: 2
      // }

      return state.map(agent => (agent.id === payload.id
        ? ({
          ...agent,
          resources: agent.resources.filter(
            (_, index) => index !== payload.data
          )
        })
        : agent
      ));
    default:
      return state;
  }
};

export default reducer;
