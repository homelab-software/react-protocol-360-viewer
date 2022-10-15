import React from 'react';

import cssClasses from './styles.module.css';
import scssClasses from './styles.module.scss';

export interface ProtocolProductViewerProps {
  name: string;
}

const ProtocolProductViewer: React.FC<ProtocolProductViewerProps> = ({ name }) => (
  <div className={scssClasses.helloScss}>
    <p className={cssClasses.helloCss}>Hello Mister, {name}</p>
  </div>
);

export default ProtocolProductViewer;
