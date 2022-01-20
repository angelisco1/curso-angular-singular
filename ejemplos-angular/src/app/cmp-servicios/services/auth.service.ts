import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private KEY: string = 'token'
  token$ = new EventEmitter<boolean>()

  constructor() { }

  getToken(): string | null {
    return localStorage.getItem(this.KEY)
  }

  setToken(token: string): void {
    localStorage.setItem(this.KEY, token)
    this.token$.emit(true)
  }

  delToken(): void {
    localStorage.removeItem(this.KEY)
    this.token$.emit(false)
  }
}
