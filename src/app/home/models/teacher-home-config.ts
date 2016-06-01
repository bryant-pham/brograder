import { Tile } from "./tile";
import { HomeConfig } from "./home-config";

export const TEACHER_HOME_CONFIG = new HomeConfig(
  new Tile('Assignments', 'Assignments', 'lightgreen'),
  new Tile('Class', 'Class', 'lightblue'),
  new Tile('Grades', 'Grades', '#DDBDF1'),
  new Tile('Settings', 'Settings', 'lightpink')
);
