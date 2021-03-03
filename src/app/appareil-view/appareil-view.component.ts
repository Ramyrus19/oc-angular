import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;

  lastUpdate = new Promise<Date>(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(() => { resolve(date); }, 2000 );
    }
  );

  appareils: any[] = [];
  appareilSubscription: Subscription | undefined;

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  // tslint:disable-next-line:typedef
  onAllumer(){
    this.appareilService.switchOnAll();
  }
  // tslint:disable-next-line:typedef
  onEteindre() {
    this.appareilService.switchOffAll();
  }

  ngOnInit(): void {
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  // tslint:disable-next-line:typedef
  onSave() {
    this.appareilService.saveAppareilToServer();
  }

  // tslint:disable-next-line:typedef
  onFetch() {
    this.appareilService.getAppareilsfromServer();
  }
}
