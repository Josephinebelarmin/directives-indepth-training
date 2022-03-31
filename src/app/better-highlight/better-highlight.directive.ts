import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: string  = 'transparent';
  @HostBinding('style.color') color: string  = 'gold';

  constructor(private elRefer: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
  //   this.renderer.setStyle(this.elRefer.nativeElement, 'background-color', 'blue')
  // this.renderer.setStyle(this.elRefer.nativeElement, 'color', 'white')
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRefer.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elRefer.nativeElement, 'color', 'white')
  this.backgroundColor = 'blue';
  this.color = 'white';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRefer.nativeElement, 'background-color', 'transparent')
    // this.renderer.setStyle(this.elRefer.nativeElement, 'color', 'black')
    this.backgroundColor = 'transparent';
    this.color = 'black'
  }
}
