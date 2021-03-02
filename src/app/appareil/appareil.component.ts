import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName!: string;
  @Input() appareilStatus!: string;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getStatus(){
    return this.appareilStatus;
  }

  // @ts-ignore
  // tslint:disable-next-line:typedef
  getColor() {
    if (this.appareilStatus === 'allumé'){
      return 'green';
    }else if (this.appareilStatus === 'éteint'){
      return 'red';
    }
  }
}


