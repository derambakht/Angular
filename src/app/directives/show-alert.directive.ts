import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[showAlert]'
})
export class ShowAlertDirective {
  @HostListener('click', ['$event.target.id']) onClick(id: any) {
    alert(`You clicked on ${id}`);
  } 
}
