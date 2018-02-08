import { Directive, ElementRef, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core/src/render/api';

@Directive({
  selector: '[appChecked]'
})
export class CheckedDirective implements OnInit {

  ngOnInit(): void {
    let li = this.el.nativeElement;
    }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

}
