import { Tile } from './tile';
import { HomeConfig } from './home-config';

export const TEACHER_HOME_CONFIG = new HomeConfig(
  new Tile('Assignments', 'create, edit, and grade assignments', '/assignments', 'lightgreen'),
  new Tile('Class', 'view and edit classes and students', '/class', 'lightblue'),
  new Tile('Grades', 'view and edit grades', '/grades', '#DDBDF1'),
  new Tile('Settings', '', '/settings', 'lightpink')
);
