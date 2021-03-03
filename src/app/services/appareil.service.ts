import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AppareilService{
  appareilSubject = new Subject<any[]>();

  private appareils = [];

  constructor(private httpClient: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  emitAppareilSubject(){
    this.appareilSubject.next(this.appareils.slice());
  }

  // tslint:disable-next-line:typedef
  getAppareilById(id: number){
    return this.appareils.find(
      (appareilObject) => {
        // @ts-ignore
        return appareilObject.id === id;
      }
    );
  }

  // tslint:disable-next-line:typedef
  switchOnAll(){
    for (const appareil of this.appareils){
      // @ts-ignore
      appareil.status = 'allumé';
    }
    this.emitAppareilSubject();
  }

  // tslint:disable-next-line:typedef
  switchOffAll(){
    for (const appareil of this.appareils){
      // @ts-ignore
      appareil.status = 'éteint';
    }
    this.emitAppareilSubject();
  }

  // tslint:disable-next-line:typedef
  switchOnOne(index: number){
    // @ts-ignore
    this.appareils[index].status = 'allumé';
    this.emitAppareilSubject();
  }

  // tslint:disable-next-line:typedef
  switchOffOne(index: number){
    // @ts-ignore
    this.appareils[index].status = 'éteint';
    this.emitAppareilSubject();
  }

  // tslint:disable-next-line:typedef
  addAppareil(name: string, status: string){
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    // @ts-ignore
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    // @ts-ignore
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }

  // tslint:disable-next-line:typedef
  saveAppareilToServer(){
    // @ts-ignore
    this.httpClient
      .put('https://http-client-demo-bb395-default-rtdb.firebaseio.com/appareils.json', this.appareils)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur de sauvegarde ! ' + error);
        }
      )
    ;
  }

  // tslint:disable-next-line:typedef
  getAppareilsfromServer(){
    this.httpClient
      .get<any[]>('https://http-client-demo-bb395-default-rtdb.firebaseio.com/appareils.json')
      .subscribe(
        (response) => {
          // @ts-ignore
          this.appareils = response;
          this.emitAppareilSubject();
        },
        (error) => {
          console.log('Erreur de chargement');
        }
      );
  }
}
