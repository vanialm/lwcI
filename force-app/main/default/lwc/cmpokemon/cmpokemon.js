import { LightningElement, track } from 'lwc';

const HIDDEN_IMAGE_URL = 'https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/5dd1da62-7fad-4065-ac16-928d743a2176/7af3b478-4cfa-4fce-8c24-af07c24c38c5.jpg';
const VISIBLE_IMAGE_URL = 'https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/5dd1da62-7fad-4065-ac16-928d743a2176/98a48255-bedb-46d7-8f6e-a54229d3c75d.jpg';

export default class PokemonImage extends LightningElement {
  @track currentImage = HIDDEN_IMAGE_URL;

  toggleImage() {
    this.currentImage = (this.currentImage === HIDDEN_IMAGE_URL) ? VISIBLE_IMAGE_URL : HIDDEN_IMAGE_URL;
  }
}