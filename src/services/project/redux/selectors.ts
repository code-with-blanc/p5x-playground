import { RootState } from '../../../setup/redux/rootReducer';
import { SourceFile } from '../types';

// eslint-disable-next-line import/prefer-default-export
export function activeSourceFile(state: RootState) : SourceFile | null {
  const sourcesFiles : SourceFile[] = state.sourceFileStore.sourceFiles;
  const activeId = state.sourceFileStore.activeSourceFileId;

  return sourcesFiles.find((s) => s.id === activeId) || null;
}

export function sources(state: RootState) : SourceFile[] {
  return state?.sourceFileStore?.sourceFiles || [];
}
