import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-referencias',
  templateUrl: './cmp-referencias.component.html',
  styleUrls: ['./cmp-referencias.component.css']
})
export class CmpReferenciasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  reproducir(video: HTMLMediaElement): void {
    console.dir(video)
    video.play()
  }

  pausar(video: HTMLMediaElement): void {
    video.pause()
  }

  cambiarVolumen(video: HTMLMediaElement, event: any): void {
    const volumen = event.target.value / 100
    video.volume = volumen
  }

}
