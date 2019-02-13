import {prompt} from 'inquirer';
import {Pergunta} from '../inquirer/pergunta';
import { Pedido } from './model/pedido';
import { Cliente } from './model/cliente';
import { Pizza } from './model/pizza';
import { Entrega } from './model/entrega';

export class PedidoController {

  private pedido :Pedido = new Pedido();

  public fazerPedido() {
    this.perguntarDadosPessoais();
    this.perguntarDadosPedido();
    this.perguntarDadosEntrega();
  }

  private perguntarDadosPessoais() {
    let perguntas = this.obterPerguntasDadosPessoais()

    prompt(perguntas)
      .then((answers:any) => {
        this.pedido.setCliente(new Cliente(answers.nome, answers.telefone));
      });
  }

  private perguntarDadosPedido() {

    let perguntas = this.obterPerguntasDadosPizza()

    prompt(perguntas)
      .then((answers:any) => {
        this.pedido.setPizza(new Pizza(answers.tamanho, answers.sabor));
      });
  }

  private perguntarDadosEntrega() {

    let entrega = new Pergunta('entrega','confirm','Deseja que entreguemos o pedido?',null,[]).retornarPergunta();

    prompt([entrega])
      .then((answers:any) => {

        let paraEntrega = (answers.enterga.toLowerCase() == 'sim')
        this.pedido.setParaEntrega(paraEntrega);
      });

      if (!this.pedido.getParaEntrega()) {
        return;
      }

    let perguntas = this.obterPerguntasDadosEntrega();

    prompt(perguntas)
      .then((answers:any) => {
        this.pedido.setEntrega(new Entrega(answers.bairro, answers.rua, answers.numeroCasa));
      });
  }

  private obterPerguntasDadosPessoais() {
    
    let nome = new Pergunta('nome','input','Qual o seu nome?',null,[]).retornarPergunta();
    let telefone = new Pergunta('telefone','input','Qual o seu telefone?',null,[]).retornarPergunta();
    
    return [nome, telefone];
  }
  
  private obterPerguntasDadosPizza() {

    let tamanho = new Pergunta('tamanhoPizza','list','Qual o tamanho da pizza?',0,this.tamanhosDePizza()).retornarPergunta();
    let sabor = new Pergunta('sabor','list','Qual  sabor você deseja?',0,this.saboresDePizza()).retornarPergunta();
    
    return [tamanho, sabor]
  }

  private tamanhosDePizza() :Array<string> {
    return ['Pequena', 'Média', 'Grande', 'Extra grande'];
  }

  private saboresDePizza() :Array<string> {
    return [
      'Alho e Óleo',
      'mussarela',
      'Bacon',
      'Calabresa',
      'Milho'
    ]
  }

  private obterPerguntasDadosEntrega() {

    let bairro = new Pergunta('bairro','input','Qual o bairro para entrega?',null,[]).retornarPergunta();
    let rua = new Pergunta('rua','input','Qual a rua para entrega?',null,[]).retornarPergunta();
    let numeroCasa = new Pergunta('numeroCasa','input','Qual número da casa?',null,[]).retornarPergunta();

    return [bairro, rua, numeroCasa];
  }

  public imprimirRelatorio() {

    console.log(`Certo, ${this.pedido.getCliente().getNome()}, 
      nós iremos fazer 1 pizza ${this.pedido.getPizza().tamanho.toLowerCase()} 
      de ${this.pedido.getPizza().sabor.toLowerCase()}.`)

    if (this.pedido.getParaEntrega()) {
      console.log(`A previsão de entrega é de 50 minutos, 
      no endereço: rua ${this.pedido.getEntrega().getRua()}, ${this.pedido.getEntrega().getNumeroCasa()} no bairro ${this.pedido.getEntrega().getBairro()}
      se necessário o motoboy entrará em contato contigo através do telefone ${this.pedido.getCliente().getTelefone()}`)
    } else {
      console.log(`Em 35 minutos a pizza ficará pronta e você poderá vir retirar em nosso estabelecimento`)
    }

  }

}