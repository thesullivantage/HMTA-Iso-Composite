import React from 'react';
import Main from './Main';

// Necessary for server side react

const Root = ({ route }) => (
  <Main routes={route.routes} />
);

export default Root;
