/* eslint-disable class-methods-use-this */
import { SourceFile, Project } from './types';

import defaultFiles from './defaultSources.js';

const LS_SOURCES = 'sourceFiles';
const LS_PROJECTS = 'projects';

class ProjectService {
  public loadFiles() : SourceFile [] {
    try {
      // eslint-disable-next-line no-undef
      const stored = window?.localStorage?.getItem(LS_SOURCES);
      const files = JSON.parse(stored || '');

      if (Array.isArray(files) && files.length > 0) {
        return files;
      }
    } catch {
      return defaultFiles;
    }

    return defaultFiles;
  }

  public loadProjects() : Project[] {
    const defaultProject : Project = {
      id: 1,
      name: 'Main Project',
      fileIds: [1, 2],
    };

    try {
      // eslint-disable-next-line no-undef
      const stored = window?.localStorage?.getItem(LS_PROJECTS);
      const projects = JSON.parse(stored || '');

      if (projects.isArray(projects) && projects.length > 0) {
        return projects;
      }

      return [defaultProject];
    } catch {
      return [defaultProject];
    }
  }

  public saveFiles(sources : SourceFile[]) {
    // eslint-disable-next-line no-undef
    window.localStorage.setItem(LS_SOURCES, JSON.stringify(sources));
  }
}

export default new ProjectService();
export type { ProjectService };
