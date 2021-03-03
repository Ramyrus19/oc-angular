import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';

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
    this.appareils = this.appareilService.appareils;
  }

}
