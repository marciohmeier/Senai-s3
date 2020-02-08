import {PedidoController} from './pedidoController';

export class Controller {

  public fazerPedido() {

    let pedidoController = new PedidoController();

    pedidoController.fazerPedido()
    pedidoController.imprimirRelatorio()
    pedidoController.imprimirRelatorio()
  }
}