export class Pergunta {

  private name :string = '';
  private type :string = '';
  private message :string = '';
  private defaultChoice :number = 0;
  private choices :Array<string> = [];
  private teste :Array<string> = [];


  constructor(name:any, type:any, message:any, defaultChoice:any, choices:Array<string>){
    this.name=name
    this.type=type
    this.message=message
    this.defaultChoice=defaultChoice
    this.choices=choices
  }

  public retornarPergunta() {
    return {
      'name': this.name,
      'type': this.type,
      'message': this.message,
      'default': this.defaultChoice,
      'choices': this.choices
    }
  }


}