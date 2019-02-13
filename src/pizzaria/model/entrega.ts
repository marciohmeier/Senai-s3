export class Entrega {
  private bairro :string = '';
  private rua: string = '';
  private numeroCasa :string = '';

  constructor(bairro :string, rua :string, numeroCasa :string) {
    this.bairro = bairro;
    this.rua = rua;
    this.numeroCasa = numeroCasa;
  }

  public getBairro() {
    return this.bairro
  }

  public getRua() {
    return this.rua
  }

  public getNumeroCasa() {
    return this.numeroCasa;
  }
}