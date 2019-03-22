import React from 'react';
import { renderRoutes } from 'react-router-config';

// Necessary for server side react
const Main = ({ routes }) => (
  <div>
    {renderRoutes(routes)}
  </div>
);

export default Main;
