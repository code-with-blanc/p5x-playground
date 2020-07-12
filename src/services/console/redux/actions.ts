import type { Message, Method } from '../types';

export const log = (content: unknown) => {
  return putMessage('log', [content || '']);
};

const putMessage = (method: Method, args: unknown[]) => ({
  type: 'console/PUT_MESSAGE',
  payload: {
    message: {
      method,
      args,
    } as Message,
  },
} as const);

export type ConsoleAction =
  | ReturnType<typeof putMessage>
