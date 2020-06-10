import { SourceFile } from './sourceFile';

export interface SourceFileStoreState {
  sourceFiles: SourceFile[];
  activeSourceFileId: number | null;
}
