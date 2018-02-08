import { Directive, HostListener, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  @Input()
  private date: Date;

  private paragraph;

  constructor(private el: ElementRef, private renderer: Renderer2) {

    this.paragraph = this.renderer.createElement('p');

   }

  @HostListener('mouseenter')
  onmouseenter(eventDate: Event) {
      this.paragraph.innerHTML = this.date.toLocaleDateString();
      this.renderer.appendChild(this.el.nativeElement, this.paragraph);
  }

  @HostListener('mouseleave')
  onmouseleave(eventDate: Event) {
    this.renderer.removeChild(this.el.nativeElement, this.paragraph);
  }

}
