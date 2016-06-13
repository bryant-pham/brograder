import { Tile } from './tile';
import { HomeConfig } from './home-config';

export const TEACHER_HOME_CONFIG = new HomeConfig(
  new Tile('Assignments', 'create, edit, and grade assignments', 'Assignments', 'lightgreen'),
  new Tile('Class', 'view and edit classes and students', 'Class', 'lightblue'),
  new Tile('Grades', 'view and edit grades', 'Grades', '#DDBDF1'),
  new Tile('Settings', '', 'Settings', 'lightpink')
);
