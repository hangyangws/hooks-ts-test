export const getAgentTypeList = (data) => {
  const rest = {
    All: data.length
  };

  data.forEach((item) => {
    if (rest[item.type]) {
      rest[item.type] += 1;
    } else {
      rest[item.type] = 1;
    }
  });

  return Object.keys(rest).map(key => ({
    name: key,
    number: rest[key]
  }));
};

export const getAgentStatusMap = data => {
  const rest = {
    building: 0,
    idle: 0
  };

  data.forEach((item) => {
    if (item.status === 'idle') {
      rest.idle += 1;
    } else if (item.status === 'building') {
      rest.building += 1;
    }
  });

  return rest;
};

export const titleCase = str => (
  str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase())
);
