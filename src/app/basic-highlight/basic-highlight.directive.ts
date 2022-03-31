import {Directive, ElementRef, OnInit } from '@angular/core';
@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirecitve implements OnInit{

 constructor(private elementReference: ElementRef){ }
 ngOnInit() {
     this.elementReference.nativeElement.style.backgroundColor = 'green';
     this.elementReference.nativeElement.style.color = 'black';
 }
}