import { connect } from 'react-redux';

import ProjectSelect from './projectSelect';
import { Project } from '../../../../services/project/types';

const someProjs : Project[] = [
  { id: 1, name: 'Project 1', fileIds: [] },
  { id: 2, name: 'Project 2', fileIds: [] },
  { id: 3, name: 'Project 3', fileIds: [] },
  { id: 4, name: 'Project 4', fileIds: [] },
];

const mapStateToProps = () => ({
  projects: someProjs,
  activeProjectId: null,
});

const mapDispatchToProps = () => ({
  setActiveProject: (id : number) => { console.log(`Set project to id ${id}`); },
  createNewProject: () => { console.log('Should create new project'); },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSelect);
