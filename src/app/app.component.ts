import {Component, OnInit} from '@angular/core';
import {AppareilService} from './services/appareil.service';
import {Observable} from 'rxjs/Observable';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  seconds: number | undefined;

  constructor() {
  }

  ngOnInit(): void {
    const counter = Observable.interval(1000);
    counter.subscribe(
      (value: number) => {
        this.seconds = value;
      },
      (error: any) => {
        console.log('Une erreur a été rencontrée !');
      },
      () => {
        console.log('Observable complété !');
      }
    );
  }
}
