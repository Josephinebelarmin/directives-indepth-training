import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRefer: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    this.renderer.setStyle(this.elRefer.nativeElement, 'background-color', 'blue')
  this.renderer.setStyle(this.elRefer.nativeElement, 'color', 'white')
  }

}
