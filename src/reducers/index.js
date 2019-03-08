import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
  //libraries is a reducer
  libraries: LibraryReducer
});
