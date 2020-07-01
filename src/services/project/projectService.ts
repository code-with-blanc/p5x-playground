import { SourceFile } from './types/sourceFile';

import defaultSourceFiles from './defaultSources.js';

const LS_STORAGE = 'sourceFiles';

class ProjectService {
  public static createNewSourceFile(existingSources : SourceFile[]) : SourceFile {
    const maxId = existingSources.reduce((max, s) => (s.id > max ? s.id : max), 0);

    return {
      id: maxId + 1,
      name: `New File (${maxId + 1})`,
      code: '',
    };
  }

  public static load() : SourceFile [] {
    // eslint-disable-next-line no-undef
    const stored = window?.localStorage?.getItem(LS_STORAGE);
    if (stored) {
      return JSON.parse(stored) || defaultSourceFiles;
    }

    return defaultSourceFiles;
  }

  private static saveSources(sources : SourceFile[]) {
    // eslint-disable-next-line no-undef
    localStorage.setItem(LS_STORAGE, JSON.stringify(sources));
  }
}

export default ProjectService;
