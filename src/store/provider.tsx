import React from 'react';

import { Props } from 'src/types';

import providers from './providers';

const Provider = (props: Props): any => (
  providers.reduceRight((children, Parent) => (
    <Parent>{children}</Parent>
  ), props.children)
);

export default Provider;
