import { SourceFile } from '../types';

export const setFileList = (files: SourceFile[]) => ({
  type: 'project/SET_FILES',
  payload: files,
} as const);

export const createFile = () => ({
  type: 'project/CREATE_FILE',
} as const);

export const deleteFile = (id: number) => ({
  type: 'project/DELETE_FILE',
  payload: { id },
} as const);

export const setActiveFileId = (id: number) => ({
  type: 'project/SET_ACTIVE_FILE',
  payload: id,
} as const);

export const patchFile = (id: number, patch: Partial<SourceFile>) => ({
  type: 'project/PATCH_FILE',
  payload: { id, patch },
} as const);

export const setActiveProjectId = (id: number) => ({
  type: 'project/SET_ACTIVE_PROJECT',
  payload: id,
} as const);

export type ProjectAction =
  | ReturnType<typeof setFileList>
  | ReturnType<typeof createFile>
  | ReturnType<typeof deleteFile>
  | ReturnType<typeof setActiveFileId>
  | ReturnType<typeof patchFile>
  | ReturnType<typeof setActiveProjectId>
