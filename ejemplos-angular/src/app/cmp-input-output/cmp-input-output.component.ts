import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-input-output',
  templateUrl: './cmp-input-output.component.html',
  styleUrls: ['./cmp-input-output.component.css']
})
export class CmpInputOutputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mostrarString(event: any): void {
    console.log(event)
  }
}
