import { ProjectState } from './projectState';
import { ProjectAction } from './actions';
import { SourceFile } from '../types';

export const INITIAL_STATE: ProjectState = {
  projects: [],
  activeProjectId: null,

  sourceFiles: [],
  activeSourceFileId: null,
};

const reducer = (state = INITIAL_STATE, action: ProjectAction): ProjectState => {
  switch (action.type) {
    case 'project/SET_FILES':
      return {
        ...state,
        sourceFiles: action.payload,
      };
    case 'project/CREATE_FILE':
      return {
        ...state,
        sourceFiles: [...state.sourceFiles, createSource(state.sourceFiles)],
      };
    case 'project/DELETE_FILE':
      return {
        ...state,
        sourceFiles: state.sourceFiles.filter((f) => f.id !== action.payload.id),
      };
    case 'project/SET_ACTIVE_FILE':
      return {
        ...state,
        activeSourceFileId: action.payload as number,
      };
    case 'project/PATCH_FILE':
      return {
        ...state,
        sourceFiles: state.sourceFiles.map((s) => {
          const { patch, id } = action.payload;
          if (s.id === id) {
            return {
              ...s,
              ...patch,
            };
          }

          return s;
        }),
      };
    case 'project/SET_ACTIVE_PROJECT':
      return {
        ...state,
        activeProjectId: action.payload,
      };
    default:
      return state;
  }
};

const createSource = (existingFiles: SourceFile[]) => {
  const maxId = existingFiles.reduce((max, s) => (s.id > max ? s.id : max), 0);

  return {
    id: maxId + 1,
    name: `New File (${maxId + 1})`,
    code: '',
  } as SourceFile;
};

export default reducer;
