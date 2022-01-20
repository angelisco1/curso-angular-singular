import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html',
  styleUrls: ['./cmp-a.component.css']
})
export class CmpAComponent implements OnInit {
  items: Array<string> = []

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.items = this.data.items
  }

  guardar(event: any): void {
    this.data.addItem(event.target.value)
  }
}
