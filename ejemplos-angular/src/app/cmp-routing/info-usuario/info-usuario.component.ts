import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.css']
})
export class InfoUsuarioComponent implements OnInit {
  userId: string = ''

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe((params: Params) => {
      this.userId = params['id']!
      // Pedir la info del usuario con un GET
    })
    this.activatedRoute.paramMap
      .subscribe((params: ParamMap) => {
        this.userId = params.get('id')!
        // Pedir la info del usuario con un GET
      })
  }

}
