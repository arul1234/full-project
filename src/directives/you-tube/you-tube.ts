import { Directive } from '@angular/core';

/**
 * Generated class for the YouTubeDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[you-tube]' // Attribute selector
})
export class YouTubeDirective {

  constructor() {
    console.log('Hello YouTubeDirective Directive');
  }

}
