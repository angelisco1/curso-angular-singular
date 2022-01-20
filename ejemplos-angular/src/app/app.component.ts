import { Component } from '@angular/core';
import { AuthService } from './cmp-servicios/services/auth.service';

@Component({
  selector: 'app-root', // El nombre de la etiqueta
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: boolean = false

  constructor(private auth: AuthService) {
    this.isLoggedIn = !!auth.getToken()
  }

  ngOnInit() {
    this.auth.token$
      .subscribe((loggedIn: boolean) => {
        this.isLoggedIn = loggedIn
      })
  }

  login(): void {
    const token: string = Math.random() + ''
    this.auth.setToken(token)
  }

  logout(): void {
    this.auth.delToken()
  }
}
