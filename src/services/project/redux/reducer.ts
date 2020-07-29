import { ProjectState } from './projectState';
import { ProjectAction } from './actions';

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
    case 'project/APPEND_FILE':
      return {
        ...state,
        sourceFiles: [...state.sourceFiles, action.payload],
      };
    case 'project/REMOVE_FILE':
      return {
        ...state,
        sourceFiles: state.sourceFiles.filter((f) => f.id !== action.payload),
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

export default reducer;
