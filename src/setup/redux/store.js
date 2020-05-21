import { createStore } from 'redux';
import rootReducer from './rootReducer';
import SketchRepository from '../../repository/sketch';

const store = createStore(rootReducer);

SketchRepository.subscribe(store);

export default store;
