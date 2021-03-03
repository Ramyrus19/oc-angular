import { Component, Input, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName!: string;
  @Input() appareilStatus!: string;
  @Input() indexOfAppareil!: number;
  @Input() id!: number;

  constructor(private appareilService: AppareilService) { }

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

  // tslint:disable-next-line:typedef
  onSwitchOn(){
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }

  // tslint:disable-next-line:typedef
  onSwitchOff(){
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }
}


