import {Subject} from 'rxjs';

export class AppareilService{
  appareilSubject = new Subject<any[]>();

  private appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Télévision',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  // tslint:disable-next-line:typedef
  emitAppareilSubject(){
    this.appareilSubject.next(this.appareils.slice());
  }

  // tslint:disable-next-line:typedef
  getAppareilById(id: number){
    return this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );
  }

  // tslint:disable-next-line:typedef
  switchOnAll(){
    for (const appareil of this.appareils){
      appareil.status = 'allumé';
    }
    this.emitAppareilSubject();
  }

  // tslint:disable-next-line:typedef
  switchOffAll(){
    for (const appareil of this.appareils){
      appareil.status = 'éteint';
    }
    this.emitAppareilSubject();
  }

  // tslint:disable-next-line:typedef
  switchOnOne(index: number){
    this.appareils[index].status = 'allumé';
    this.emitAppareilSubject();
  }

  // tslint:disable-next-line:typedef
  switchOffOne(index: number){
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
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }
}
