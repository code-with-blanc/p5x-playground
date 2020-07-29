/* eslint-env jest */
import deepFreeze from 'deep-freeze';

import reducer from './reducer';
import * as actions from './actions';
import { ProjectState } from './projectState';
import { SourceFile } from '../types';

describe('Project service reducer', () => {
  it('set file list', () => {
    const filesToSet = [
      new SourceFile(1, 'File 1', 'My code'),
    ];

    const result = reducer(
      stateWithFileList([]),
      actions.setFileList(filesToSet),
    );

    expect(result.sourceFiles).toEqual(filesToSet);
  });

  it('create file', () => {
    const initialFiles = [sourceFileWithId(1), sourceFileWithId(2)];

    const result = reducer(
      stateWithFileList(initialFiles),
      actions.createFile(),
    );

    expect(result.sourceFiles.length).toEqual(3);
  });
  
  describe('remove file', () => {
    it('remove the file with given id', () => {
      const file1 = sourceFileWithId(10);
      const file2 = sourceFileWithId(20);
      const file3 = sourceFileWithId(30);

      const result = reducer(
        stateWithFileList([file1, file2, file3]),
        actions.deleteFile(20),
      );

      expect(result.sourceFiles).toEqual([file1, file3]);
    });
    it('no-op if id not in file list', () => {
      const file1 = sourceFileWithId(10);
      const file2 = sourceFileWithId(20);
      const file3 = sourceFileWithId(30);

      const result = reducer(
        stateWithFileList([file1, file2, file3]),
        actions.deleteFile(12345),
      );

      expect(result.sourceFiles).toEqual([file1, file2, file3]);
    });
  });

  it('set active file id', () => {
    const initialState = deepFreeze({
      sourceFiles: [] as SourceFile[],
      activeSourceFileId: -1,
    }) as ProjectState;

    const result = reducer(initialState, actions.setActiveFileId(10));

    expect(result.activeSourceFileId).toEqual(10);
  });

  describe('patch file', () => {
    it('should update a property', () => {
      const file1 = sourceFileWithId(1);
      const file2 = sourceFileWithId(2);
      const newCode = 'patched code';

      const result = reducer(
        stateWithFileList([file1, file2]),
        actions.patchFile(file2.id, { code: newCode }),
      );

      const patchedFile = {
        ...file2,
        code: newCode,
      };
      expect(result.sourceFiles[1]).toEqual(patchedFile);
    });

    it('should no-op if invalid id', () => {
      const initialState = stateWithFileList([
        sourceFileWithId(1), sourceFileWithId(2),
      ]);
      const newCode = 'patched code';

      const result = reducer(
        initialState,
        actions.patchFile(12345, { code: newCode }),
      );

      expect(result).toEqual(initialState);
    });
  });
});

const stateWithFileList = (files: SourceFile[]) => {
  return deepFreeze({
    sourceFiles: files,
    activeSourceFileId: 0,
  }) as ProjectState;
};

const sourceFileWithId = (id: number) => {
  return new SourceFile(id, `File ${id}`, `code for file ${id}`);
};
