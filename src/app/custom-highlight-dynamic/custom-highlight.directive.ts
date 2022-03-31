import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomHighlight]'
})
export class CustomHighlightDirective implements OnInit {
@Input() defaultColor: string ='transparent'
@Input() highlightColor: string = 'blue'
  @HostBinding('style.backgroundColor') backgroundColor: string ;
    constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseenter') mouseover(eventData: Event){
    this.backgroundColor = this.highlightColor
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.backgroundColor = this.defaultColor
  }
  
}
