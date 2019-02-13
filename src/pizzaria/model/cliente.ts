export class Cliente {
  private nome :string = '';
  private telefone :string = '';

  constructor(nome: string, telefone :string) {
    this.nome = nome;
    this.telefone = telefone;
  }

  public getNome() {
    return this.nome;
  }

  public getTelefone() {
    return this.telefone;
  }
}