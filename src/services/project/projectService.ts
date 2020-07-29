/* eslint-disable class-methods-use-this */
import { SourceFile } from './types';

import defaultFiles from './defaultSources.js';

const LS_STORAGE = 'sourceFiles';

class ProjectService {
  public load() : SourceFile [] {
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

  public saveFiles(sources : SourceFile[]) {
    // eslint-disable-next-line no-undef
    window.localStorage.setItem(LS_STORAGE, JSON.stringify(sources));
  }
}

export default new ProjectService();
export type { ProjectService };
