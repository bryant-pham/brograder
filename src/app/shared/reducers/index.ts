import { currentAssignmentReducer } from './current-assignment.reducer';
import { currentClassReducer } from './current-class.reducer';
import { allClassesReducer } from './all-classes.reducer';

export * from './current-assignment.reducer';
export * from './current-class.reducer';
export * from './all-classes.reducer';

export const REDUCERS = {
  CURRENT_ASSIGNMENT: currentAssignmentReducer,
  CURRENT_CLASS: currentClassReducer,
  ALL_CLASSES: allClassesReducer
};
