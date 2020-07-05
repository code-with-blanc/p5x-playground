import React, { useState, useEffect } from 'react';

import { Console as ConsoleFeed } from 'console-feed';

type Log = {
  id: string;
  method: 'log' | 'warn' | 'error' | 'info';
  data: any[];
}

const Console : React.FC<{ className?: string; }> = ({ className }) => {
  const [logs, setLogs] = useState<Log[]>([]);
  useEffect(() => {
    setLogs([{ id: '1', method: 'info', data: ['Some message'] }]);

    setTimeout(() => {
      setLogs((previousLogs) => {
        return [...previousLogs, { id: '2', method: 'error', data: ['Delayed message'] }];
      });
    }, 2000);
  }, [setLogs]);

  return (
    <div className={className}>
      <ConsoleFeed logs={logs} variant="dark" />
    </div>
  );
};

export default Console;
