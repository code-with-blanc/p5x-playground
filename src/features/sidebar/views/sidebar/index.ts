import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { RootState } from '../../../../setup/redux/rootReducer';
import { actions } from '../../../../services/project';

import Sidebar from './sidebar';

const mapStateToProps = ({ projects } : RootState) => ({
  activeSourceFileId: projects.activeSourceFileId,
});

const mapDispatchToProps = (dispatch : Dispatch<Action<unknown>>) => ({
  addSourceFile: () => dispatch(actions.createFile()),
  removeSourceFile: (id : number) => dispatch(actions.deleteFile(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
