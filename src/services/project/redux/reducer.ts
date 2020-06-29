import ProjectState from './projectState';
import { SourceFile } from '../types';
import { ProjectAction } from './actions';

export const INITIAL_STATE: ProjectState = {
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
    case 'project/SET_ACTIVE_FILE':
      return {
        ...state,
        activeSourceFileId: action.payload as number,
      };
    case 'project/PATCH_FILE':
      return {
        ...state,
        sourceFiles: state.sourceFiles.map((s) => {
          const patch = action.payload as Partial<SourceFile>;
          if (s.id === patch?.id) {
            return {
              ...s,
              ...patch,
            };
          }

          return s;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
