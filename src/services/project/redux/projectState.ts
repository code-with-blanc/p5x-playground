import { SourceFile, Project } from '../types';

export type ProjectState = {
  projects: Project[];
  activeProjectId: number | null;
  sourceFiles: SourceFile[];
  activeSourceFileId: number | null;
};
