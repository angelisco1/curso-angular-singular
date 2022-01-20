import { Component, OnInit } from '@angular/core';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-cmp-servicios',
  templateUrl: './cmp-servicios.component.html',
  styleUrls: ['./cmp-servicios.component.css']
})
export class CmpServiciosComponent implements OnInit {

  constructor(private logger: LoggerService) {}

  ngOnInit(): void {
  }

  mostrarErr(msg: string): void {
    this.logger.error(msg)
  }

  mostrarWarn(msg: string): void {
    this.logger.warning(msg)
  }
}
