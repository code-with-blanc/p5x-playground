/* eslint-env jest */
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';

import { newSource } from './newSource.saga';
import { SourceFile } from '../types';
import ProjectService from '../projectService';
import * as actions from './actions';
import * as storeActions from '../redux/actions';
import { RootState } from '../../../setup/redux/rootReducer';

function stateWithFiles(files: SourceFile[]) : Partial<RootState> {
  return {
    projects: {
      projects: [],
      activeProjectId: null,
      sourceFiles: files,
      activeSourceFileId: 0,
    },
  };
}

it('Create new file', () => {
  const sourceToAdd = new SourceFile(1, 's1', '');

  return expectSaga(newSource)
    .withState(stateWithFiles([]))
    .provide([
      [matchers.call.fn(ProjectService.createNewSourceFile), sourceToAdd],
    ])

    // Assert that the `put` will eventually happen.
    .put(storeActions.appendFile(sourceToAdd))

    // Dispatch any actions that the saga will `take`.
    .dispatch(actions.newSource())
    // Start the test. Returns a Promise.
    .run();
});
