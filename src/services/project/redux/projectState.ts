import { SourceFile } from '../types/sourceFile';

export default interface ProjectState {
  sourceFiles: SourceFile[];
  activeSourceFileId: number | null;
}
