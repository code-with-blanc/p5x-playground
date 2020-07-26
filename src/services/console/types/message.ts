import { Methods } from '.';

export type Message = {
  id: string;
  method: Methods;
  data: unknown[];
}
