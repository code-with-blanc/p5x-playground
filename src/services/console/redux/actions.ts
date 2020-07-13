import type { Methods } from '../types';

export const log = (content: unknown) => {
  return putMessage('log', [content || '']);
};

export const info = (content: unknown) => {
  return putMessage('info', [content || '']);
};

export const error = (content: unknown) => {
  return putMessage('error', [content || '']);
};

export const clear = () => ({
  type: 'console/CLEAR',
} as const);

const putMessage = (method: Methods, args: unknown[]) => ({
  type: 'console/PUT_MESSAGE',
  payload: {
    method,
    args,
  },
} as const);

export type ConsoleAction =
  | ReturnType<typeof putMessage>
  | ReturnType<typeof clear>
