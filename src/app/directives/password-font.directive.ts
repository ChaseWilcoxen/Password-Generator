import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appPasswordFont]'
})
export class PasswordFontDirective {

  
  constructor(private el: ElementRef) {
    el.nativeElement.style.fontWeight = "700";
    
   }

}
