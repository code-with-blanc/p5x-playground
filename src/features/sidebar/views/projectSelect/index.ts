import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';

import { RootState } from '../../../../setup/redux/rootReducer';
import { Project } from '../../../../services/project/types';
import { actions } from '../../../../services/project';

import ProjectSelect from './projectSelect';

const someProjs : Project[] = [
  { id: 1, name: 'Project 1', fileIds: [] },
  { id: 2, name: 'Project 2', fileIds: [] },
  { id: 3, name: 'Project 3', fileIds: [] },
  { id: 4, name: 'Project 4', fileIds: [] },
];

const mapStateToProps = ({ projects } : RootState) => ({
  projects: someProjs,
  activeProjectId: projects.activeProjectId,
});

const mapDispatchToProps = (dispatch: Dispatch<Action<unknown>>) => ({
  setActiveProject: (id : number) => dispatch(actions.setActiveProjectId(id)),
  createNewProject: () => { console.log('Should create project'); },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSelect);
