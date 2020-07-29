import { RootState } from '../../../setup/redux/rootReducer';
import { SourceFile } from '../types';

// eslint-disable-next-line import/prefer-default-export
export function activeSourceFile(state: RootState) : SourceFile | null {
  const sourcesFiles : SourceFile[] = state.projects.sourceFiles;
  const activeId = state.projects.activeSourceFileId;

  return sourcesFiles.find((s) => s.id === activeId) || null;
}

export function files(state: RootState) : SourceFile[] {
  return state?.projects?.sourceFiles || [];
}
