import React from 'react';

import providers from './providers';

// 数据 Provider 组合器
const ProvidersComposer = (props) => (
  props.providers.reduceRight((children, Parent) => (
    <Parent>{children}</Parent>
  ), props.children)
);

const Provider = (props) => {
  return (
    <ProvidersComposer providers={providers}>
      {props.children}
    </ProvidersComposer>
  );
};

export default Provider;

