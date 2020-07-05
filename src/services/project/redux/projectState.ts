import { SourceFile } from '../types';

export default interface ProjectState {
  sourceFiles: SourceFile[];
  activeSourceFileId: number | null;
}
