import type { Methods } from '../types';

export const log = (content: unknown) => {
  return putMessage('log', [content || '']);
};

const putMessage = (method: Methods, args: unknown[]) => ({
  type: 'console/PUT_MESSAGE',
  payload: {
    method,
    args,
  },
} as const);

export type ConsoleAction =
  | ReturnType<typeof putMessage>
