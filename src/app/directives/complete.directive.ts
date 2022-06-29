import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appComplete]'
})
export class CompleteDirective {

  @Input() completed = false;

  @HostBinding('class')
  elementClass = '';

  ngOnInit() {
    if (this.completed) this.elementClass = "completed"
  }
  constructor() {
  }

}
