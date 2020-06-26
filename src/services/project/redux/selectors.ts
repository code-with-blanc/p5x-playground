import { ProjectState } from './projectState';
import { SourceFile } from '..';

// eslint-disable-next-line import/prefer-default-export
export function activeSourceFile(state: ProjectState) : SourceFile | null {
  const sourceFile = state.sourceFiles.find((s) => s.id === state.activeSourceFileId) || null;
  return sourceFile;
}
