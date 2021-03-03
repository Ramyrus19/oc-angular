import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {
  name = 'Appareil';
  status = 'Statut';

  constructor(private appareilsService: AppareilService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    // @ts-ignore
    this.name = this.appareilsService.getAppareilById(+id).name;
    // @ts-ignore
    this.status = this.appareilsService.getAppareilById(+id).status;
  }

}
