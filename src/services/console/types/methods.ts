import type { Console } from 'console-feed';

type ConsoleProps = ConstructorParameters<typeof Console>[0];
type TypeOfLogs = ConsoleProps['logs'];
type Message = TypeOfLogs[0];

export type Methods = Message['method'];
// type Methods = 
// | "log" 
// | "debug" 
// | "info" 
// | "warn" 
// | "error" 
// | "table"
// | "clear" 
// | "time" 
// | "timeEnd" 
// | "count" 
// | "assert"
