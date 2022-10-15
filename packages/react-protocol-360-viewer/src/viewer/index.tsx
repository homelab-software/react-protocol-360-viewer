import React from 'react';
import ViewerProps from '../interfaces';

const React360Viewer: React.FC<ViewerProps> = ({
  target,
  name
}) => (
  <div>
    {target}
    <h1>Hello Mister, {name}</h1>
  </div>
);

export default React360Viewer;
