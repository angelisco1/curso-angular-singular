import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcar]'
})
export class MarcarDirective implements OnInit {
  @HostBinding('style.backgroundColor') colorFondo: string = 'white'
  // @HostBinding('style') propiedadesCss: any = {
  //   color: 'red',
  //   textDecoration: 'underline'
  // }

  @Input('appMarcar') color!: string;
  // @Input() color1: string = 'yellow'

  constructor() {
    // console.log(`CONSTRUCTOR - ${this.color}`)
  }

  ngOnInit() {
    if (!this.color) {
      this.color = 'yellow'
    }
    console.log(`NGONINIT - ${this.color}`)
  }

  @HostListener('mouseover') onMouseOver() {
    this.colorFondo = this.color
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.colorFondo = 'white'
  }

}
