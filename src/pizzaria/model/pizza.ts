export class Pizza {
  tamanho :string = '';
  sabor :string = '';

  constructor(tamanho: string, sabor :string) {
    this.tamanho = tamanho;
    this.sabor = sabor;
  }

  public getTamanho() {
    return this.tamanho;
  }

  public getSabor() {
    return this.sabor;
  }

}