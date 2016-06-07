import { currentAssignmentReducer } from './current-assignment.reducer';
import { currentClassReducer } from './current-class.reducer';
import { classesReducer } from './classes.reducer.ts';
import { assignmentsReducer } from './assignments.reducer';

export * from './current-assignment.reducer';
export * from './current-class.reducer';
export * from './classes.reducer.ts';
export * from './assignments.reducer';

export const REDUCERS = {
  CURRENT_ASSIGNMENT: currentAssignmentReducer,
  CURRENT_CLASS: currentClassReducer,
  CLASSES: classesReducer,
  ASSIGNMENTS: assignmentsReducer
};
