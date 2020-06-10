import { SourceFile } from '..';

//// Types
export const SET_SOURCES_LIST = 'sourceFiles/SET_LIST';
export const ADD_SOURCE = 'sourceFiles/ADD_SOURCE';
export const REMOVE_SOURCE = 'sourceFiles/REMOVE_SOURCE';
export const SET_ACTIVE_SOURCE = 'sourceFiles/SET_ACTIVE_SOURCE';
export const PATCH_SOURCE = 'sourceFiles/PATCH_SOURCE';

export interface SourceFileAction<TPayload> {
  type: string;
  payload: TPayload;
}

export type PayloadTypes = number | SourceFile | SourceFile[] | Partial<SourceFile>;

//// Action Creators
export const setSourceFiles = (sourceFiles: SourceFile []) : SourceFileAction<SourceFile[]> => ({
  type: SET_SOURCES_LIST,
  payload: sourceFiles,
});

export const addSourceFile = (newSourceFile: SourceFile) : SourceFileAction<SourceFile> => ({
  type: ADD_SOURCE,
  payload: newSourceFile,
});

export const removeSourceFile = (id: number) : SourceFileAction<number> => ({
  type: REMOVE_SOURCE,
  payload: id,
});

export const setActiveSourceFileId = (id: number) : SourceFileAction<number> => ({
  type: SET_ACTIVE_SOURCE,
  payload: id,
});

export const patchSourceFile = (patch: Partial<SourceFile>) : SourceFileAction<Partial<SourceFile>> => ({
  type: PATCH_SOURCE,
  payload: patch,
});
