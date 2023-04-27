import { LightningElement, api } from 'lwc';

export default class Cmleadform extends LightningElement {
    @api ide;
    @api name;
    @api company;
    @api status;   
}