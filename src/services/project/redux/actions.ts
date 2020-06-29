import { SourceFile } from '../types';

// Action Creators
export const setFileList = (files: SourceFile[]) => ({
  type: 'project/SET_FILES',
  payload: files,
} as const);

export const appendFile = (file: SourceFile) => ({
  type: 'project/APPEND_FILE',
  payload: file,
} as const);

export const removeFile = (id: number) => ({
  type: 'project/REMOVE_FILE',
  payload: id,
} as const);

export const setActiveFileId = (id: number) => ({
  type: 'project/SET_ACTIVE_FILE',
  payload: id,
} as const);

export const patchFile = (patch: Partial<SourceFile>) => ({
  type: 'project/PATCH_FILE',
  payload: patch,
} as const);

export type ProjectAction =
  | ReturnType<typeof setFileList>
  | ReturnType<typeof appendFile>
  | ReturnType<typeof removeFile>
  | ReturnType<typeof setActiveFileId>
  | ReturnType<typeof patchFile>
