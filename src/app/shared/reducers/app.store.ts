import { Assignment, Class } from "../models";

export interface AppStore {
  CURRENT_ASSIGNMENT: Assignment,
  CURRENT_CLASS: Class
}
