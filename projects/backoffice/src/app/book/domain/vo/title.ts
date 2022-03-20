export class Title {
  private title: string;

  constructor(title: string) {
    this.validateTitle(title);
    this.title = title;
  }

  validateTitle(title: string) {
    if (title.length < 15) {
      throw new Error('El título debe tener al menos 15 caracteres');
    }
  }

  get value() {
    return this.title;
  }
}
