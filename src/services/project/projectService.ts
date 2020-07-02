import { SourceFile } from './types/sourceFile';

import defaultFiles from './defaultSources.js';

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
    try {
      // eslint-disable-next-line no-undef
      const stored = window?.localStorage?.getItem(LS_STORAGE);
      const files = JSON.parse(stored || '');

      if (Array.isArray(files) && files.length > 0) {
        return files;
      }
    } catch {
      return defaultFiles;
    }

    return defaultFiles;
  }

  public static saveFiles(sources : SourceFile[]) {
    // eslint-disable-next-line no-undef
    window.localStorage.setItem(LS_STORAGE, JSON.stringify(sources));
  }
}

export default ProjectService;
