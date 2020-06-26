import { SourceFile } from '../types/sourceFile';

export interface ProjectState {
  sourceFiles: SourceFile[];
  activeSourceFileId: number | null;
}
