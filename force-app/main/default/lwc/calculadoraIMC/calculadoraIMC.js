import { LightningElement} from 'lwc';

export default class CalculadoraIMC extends LightningElement {

    name;
    weight;
    height;
    imc;
    result;

    handleNameChange(event){
        this.name = event.target.value;
    }
    
    handleWeightChange(event){
        this.weight = event.target.value;
    }
    
    handleHeightChange(event){
        this.height = event.target.value;
    }
    
    calcularIMC(){
        const pesoKg = this.weight;
        const alturaM = this.height;
        const imc = pesoKg / (alturaM * alturaM);
        this.imc = imc.toFixed(2);
        this.result = `O seu IMC é: ${this.imc}`;
      }

    
}  


    