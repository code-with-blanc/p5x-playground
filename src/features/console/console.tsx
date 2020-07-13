import React from 'react';

import { Console as ConsoleFeed } from 'console-feed';

import type { ConnectedProps } from './index';

type OwnProps = {
  className?: string;
}

// TODO: create store to feed console, incorporate into UI
const Console : React.FC<ConnectedProps & OwnProps> = ({ className, messages }) => {
  return (
    <div className={className}>
      <ConsoleFeed logs={messages} variant="dark" />
    </div>
  );
};

export default Console;
