import { SourceFileStoreState } from '../types/sourceFileStoreState';
import { SourceFile } from '..';

// eslint-disable-next-line import/prefer-default-export
export function activeSourceFile(state: SourceFileStoreState) : SourceFile | null {
  const sourceFile = state.sourceFilees.find((s) => s.id === state.activeSourceFileId) || null;
  return sourceFile;
}
