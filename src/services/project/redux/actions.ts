import { SourceFile } from '..';

// Types
export const SET_SKETCHES = 'sourceFilees/SET_SKETCHES';
export const ADD_SKETCH = 'sourceFilees/ADD_SKETCH';
export const REMOVE_SKETCH = 'sourceFilees/REMOVE_SKETCH';
export const SET_ACTIVE = 'sourceFilees/SET_ACTIVE';
export const PATCH_SKETCH = 'sourceFilees/PATCH_SKETCH';
export const UPDATE_SKETCH = 'sourceFilees/UPDATE_SKETCH';

export interface SourceFileAction<TPayload> {
  type: string;
  payload: TPayload;
}

export type PayloadTypes = number | SourceFile | SourceFile[] | Partial<SourceFile>;

// / Action Creators
export const setSourceFilees = (sourceFilees: SourceFile []) : SourceFileAction<SourceFile[]> => ({
  type: SET_SKETCHES,
  payload: sourceFilees,
});

export const addSourceFile = (newSourceFile: SourceFile) : SourceFileAction<SourceFile> => ({
  type: ADD_SKETCH,
  payload: newSourceFile,
});

export const removeSourceFile = (id: number) : SourceFileAction<number> => ({
  type: REMOVE_SKETCH,
  payload: id,
});

export const setActiveSourceFileId = (id: number) : SourceFileAction<number> => ({
  type: SET_ACTIVE,
  payload: id,
});

export const updateCode = (id: number, newCode: string) : SourceFileAction<any> => ({
  type: PATCH_SKETCH,
  payload: {
    id,
    code: newCode,
  },
});

export const patchSourceFile = (patch: Partial<SourceFile>) : SourceFileAction<Partial<SourceFile>> => ({
  type: UPDATE_SKETCH,
  payload: patch,
});
