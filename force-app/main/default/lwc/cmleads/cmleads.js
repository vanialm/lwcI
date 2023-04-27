import { LightningElement, api } from 'lwc';

export default class Cmleads extends LightningElement {
@api name;
@api lastname;
@api age;
@api email;
@api rating;
@api company;
@api annualrevenue;

}