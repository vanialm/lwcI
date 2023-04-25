import { LightningElement } from "lwc";

export default class App extends LightningElement {
  div1 = {
    empresa : 'SoulCoderosa',
    cnpj : '45.997.418/0001-53',
    endereco : 'Rua 13 de maio, 123'
  };
  div2 = {
    produto : 'Mouse Gamer',
    descricao : 'Mouse para Gamers',
    preco : '39,90'
  };
  div3 = {
    promocao: true,
    oferta1: 'Compre 3 e leve 4',
    oferta2: 'Frete grátis para compras acima de R$100,00'
  };

  visible = true;
  
  ocultarPromo() {
    this.visible = !this.visible;
  }

  }