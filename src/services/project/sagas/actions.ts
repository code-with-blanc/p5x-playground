export const newSource = () => ({
  type: 'project/sagas/NEW_SOURCE',
} as const);

export const updateSource = (id: number, newCode: string) => ({
  type: 'project/sagas/UPDATE_SOURCE',
  payload: { id, newCode },
} as const);

export const renameFile = (id: number, newName: string) => ({
  type: 'project/sagas/RENAME_FILE',
  payload: { id, newName },
} as const);

export const deleteFile = (id: number) => ({
  type: 'project/sagas/DELETE_FILE',
  payload: { id },
} as const);

export type SagaAction =
  | ReturnType<typeof newSource>
  | ReturnType<typeof updateSource>
  | ReturnType<typeof renameFile>
  | ReturnType<typeof deleteFile>

export type SagaActionType = SagaAction['type'];
