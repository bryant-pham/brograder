export abstract class AbstractUriBuilder {
  constructor(private scheme: string,
              private host: string,
              private port: string,
              private context: string) {
  }

  build(path: string): string {
    return this.buildBase() + path;
  }

  private buildBase(): string {
    return this.scheme + '://' + this.host + ':' + this.port + '/' + this.context;
  }
}
