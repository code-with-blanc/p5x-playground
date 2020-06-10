import { Dispatch } from 'redux';
import * as Actions from './actions';

import Repository, { SourceFile } from '..';

export const newSourceFile = (dispatch : Dispatch) => () => {
  const sourceFile = Repository.getNewSourceFile();
  dispatch(Actions.addSourceFile(sourceFile));
};

export const removeSourceFile = (dispatch: Dispatch) => (id: number) => {
  dispatch(Actions.removeSourceFile(id));
};

export const updateCode = (dispatch: Dispatch) => (id: number, code: string) => {
  dispatch(Actions.patchSourceFile({ id, code }));
};

export const patchSourceFile = (dispatch: Dispatch) => (id: number, patch: Partial<SourceFile>) => {
  dispatch(Actions.patchSourceFile({ id, ...patch }));
};

export const setActiveSourceFile = (dispatch: Dispatch) => (id: number) => {
  dispatch(Actions.setActiveSourceFileId(id));
};
