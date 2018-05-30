import { Component, Input } from '@angular/core';

/**
 * Generated class for the HeaderPageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header-page',
  templateUrl: 'header-page.html'
})
export class HeaderPageComponent {

  @Input() data : any;

  text: string;

  constructor() {
    console.log('Hello HeaderPageComponent Component');
    console.log(this.data);
  }

}
