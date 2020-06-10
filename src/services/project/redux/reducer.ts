import { SourceFileStoreState } from '../types/sourceFileStoreState';
import {
  SourceFileAction,
  ADD_SKETCH, REMOVE_SKETCH, SET_ACTIVE, SET_SKETCHES, PATCH_SKETCH, UPDATE_SKETCH, PayloadTypes,
} from './actions';

import Repository, { SourceFile } from '..';

const getInitialState = () => {
  const sourceFilees = Repository.load() || [{}];

  return {
    sourceFilees,
    activeSourceFileId: sourceFilees[0]?.id,
  };
};

export const INITIAL_STATE: SourceFileStoreState = getInitialState();

const reducer = (state = INITIAL_STATE, action: SourceFileAction<PayloadTypes>): SourceFileStoreState => {
  switch (action.type) {
    case SET_SKETCHES:
      return {
        ...state,
        sourceFilees: action.payload as SourceFile[],
      };
    case ADD_SKETCH:
      return {
        ...state,
        sourceFilees: [...state.sourceFilees, action.payload as SourceFile],
      };
    case REMOVE_SKETCH:
      return {
        ...state,
        sourceFilees: state.sourceFilees.filter((s) => s.id !== action.payload),
      };
    case UPDATE_SKETCH:
      return {
        ...state,
        sourceFilees: state.sourceFilees.map((s) => {
          const newSourceFileInfo = action.payload as Partial<SourceFile>;
          if (s.id === newSourceFileInfo?.id) {
            return { ...s, ...newSourceFileInfo };
          }

          return s;
        }),
      };
    case SET_ACTIVE:
      return {
        ...state,
        activeSourceFileId: action.payload as number,
      };
    case PATCH_SKETCH:
      return {
        ...state,
        sourceFilees: state.sourceFilees.map((s) => {
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
