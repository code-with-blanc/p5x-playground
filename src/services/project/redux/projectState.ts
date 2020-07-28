import { SourceFile, Project } from '../types';

export default interface ProjectState {
  projects: Project[];
  activeProjectId: number | null;
  sourceFiles: SourceFile[];
  activeSourceFileId: number | null;
}
