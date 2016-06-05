import { currentAssignmentReducer } from './current-assignment.reducer';
import { currentClassReducer } from './current-class.reducer';

export * from './current-assignment.reducer';
export * from './current-class.reducer';

export const REDUCERS = {
  CURRENT_ASSIGNMENT: currentAssignmentReducer,
  CURRENT_CLASS: currentClassReducer
};
