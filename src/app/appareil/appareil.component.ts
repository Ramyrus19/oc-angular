import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  appareilName = 'Machine à laver';
  appareilStatus = 'éteint';

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getStatus(){
    return this.appareilStatus;
  }
}
