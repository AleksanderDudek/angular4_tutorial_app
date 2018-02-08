import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChecked]'
})
export class CheckedDirective implements OnInit {

  ngOnInit(): void {
    const li = this.el.nativeElement;
    this.renderer.setStyle(li, 'list-style-image', 'url(/assets/favicon.png)');
    this.renderer.setStyle(li, 'background', 'aquamarine');

    }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

}

