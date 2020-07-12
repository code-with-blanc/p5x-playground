import { Method } from '.';

export type Message = {
  method: Method;
  args: unknown[];
}
