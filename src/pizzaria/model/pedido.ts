import { Cliente } from './cliente';
import { Pizza } from './pizza';
import { Entrega } from './entrega';

export class Pedido {
  private cliente :Cliente = new Cliente('', '');
  private pizza :Pizza = new Pizza('', '');
  private entrega :Entrega = new Entrega('', '', '');
  private paraEntrega :Boolean = false;



  public getCliente() {
    return this.cliente;
  }

  public getPizza() {
    return this.pizza;
  }

  public getEntrega() {
    return this.entrega;
  }

  public getParaEntrega() {
    return this.paraEntrega;
  }

  public setCliente(cliente :Cliente) {
    this.cliente = cliente;
  }

  public setPizza(pizza :Pizza) {
    this.pizza = pizza;
  }

  public setEntrega(entrega :Entrega) {
    this.entrega = entrega;
  }

  public setParaEntrega(paraEntrega :Boolean) {
    this.paraEntrega = this.paraEntrega;
  }
}