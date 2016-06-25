export class Tile {
  title: string;
  description: string;
  link: string;
  color: string;

  constructor(title: string,
              description: string,
              link: string,
              color: string) {
    this.title = title;
    this.description = description;
    this.link = link;
    this.color = color;
  }
}
