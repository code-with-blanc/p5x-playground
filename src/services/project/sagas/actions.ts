
export const updateSource = (id: number, newCode: string) => ({
  type: 'project/sagas/UPDATE_SOURCE',
  payload: { id, newCode },
} as const);

export const renameFile = (id: number, newName: string) => ({
  type: 'project/sagas/RENAME_FILE',
  payload: { id, newName },
} as const);


export type SagaAction =
  | ReturnType<typeof updateSource>
  | ReturnType<typeof renameFile>
