import { Store } from 'redux';
import { SourceFile } from './types/sourceFile';

import defaultSourceFilees from './defaultSources.js';

const LS_STORAGE = 'sourceFiles';
  
class SourceFileRepository {
  private static store : Store;

  public static subscribe(store: Store) {
    SourceFileRepository.store = store;

    store.subscribe(() => {
      const { sourceFileStore } = store.getState();
      if (sourceFileStore) {
        SourceFileRepository.onStoreUpdate(sourceFileStore);
      }
    });
  }

  public static getNewSourceFile() : SourceFile {
    const existingSourceFilees : Array<SourceFile> = SourceFileRepository.store?.getState()?.sourceFileStore?.sourceFilees || [];
    const maxId = existingSourceFilees.reduce((max, s) => (s.id > max ? s.id : max), 0);

    return {
      id: maxId + 1,
      name: `New File (${maxId + 1})`,
      code: '',
    };
  }

  public static load() : SourceFile [] {
    const stored = window?.localStorage?.getItem(LS_STORAGE);
    if (stored) {
      return JSON.parse(stored) || defaultSourceFilees;
    }

    return defaultSourceFilees;
  }

  private static onStoreUpdate(state : any) {
    localStorage.setItem(LS_STORAGE, JSON.stringify(state.sourceFilees));
  }
}

export default SourceFileRepository;
