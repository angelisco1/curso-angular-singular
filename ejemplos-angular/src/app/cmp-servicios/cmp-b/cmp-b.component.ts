import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cmp-b',
  templateUrl: './cmp-b.component.html',
  styleUrls: ['./cmp-b.component.css'],
  // providers: [
  //   DataService
  // ]
})
export class CmpBComponent implements OnInit {
  items: Array<string> = []

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.items = this.data.items
  }

  guardar(event: any): void {
    this.data.addItem(event.target.value)
  }
}
