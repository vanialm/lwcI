import { LightningElement } from 'lwc';

export default class Dadosestruturados extends LightningElement {

    // Define um objeto com chaves correspondentes aos nomes dos campos de entrada
    input ={
        firstName: '',
        lastName: '', 
        email: '', 
        website: '', 
        company: '', 
        annualrevenue: '', 
    }
    handleInputChange(event){
        let nameInput = event.target.name;
        let value = event.detail.value;

        this.input = {
            ... this.input,
            [nameInput]: value};
        let objetoMontando = JSON.stringify(this.input);
        let objetoJSON = JSON.parse(objetoMontando);
        console.log(objetoJSON);
}

}


    