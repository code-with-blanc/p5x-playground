import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';

import { RootState } from '../../../../setup/redux/rootReducer';
import { actions } from '../../../../services/project';

import ProjectSelect from './projectSelect';

const mapStateToProps = (state : RootState) => ({
  projects: state.projects.projects,
  activeProjectId: state.projects.activeProjectId,
});

const mapDispatchToProps = (dispatch: Dispatch<Action<unknown>>) => ({
  setActiveProject: (id : number) => dispatch(actions.setActiveProjectId(id)),
  createNewProject: () => { console.log('Should create project'); },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSelect);
