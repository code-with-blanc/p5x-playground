import { createStore } from 'redux';
import rootReducer from './rootReducer';
import SourceFileRepository from '../../services/project';

const store = createStore(rootReducer);

SourceFileRepository.subscribe(store);

export default store;
