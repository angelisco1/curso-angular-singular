import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, map, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent implements OnInit, OnDestroy {
  subscription: Subscription | null = null

  constructor() { }

  ngOnInit(): void {

    this.subscription = interval(1000)
      .pipe(
        filter((num: number) => {
          return num % 2 === 0
        }),
        map((num: number) => {
          return num + 1
        }),
        take(5)
      )
      .subscribe((n: number) => {
        console.log(n)
      })

  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

}
