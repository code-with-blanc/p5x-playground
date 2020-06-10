import { SourceFile } from './sourceFile';

export interface SourceFileStoreState {
  sourceFilees: SourceFile[];
  activeSourceFileId: number | null;
}
