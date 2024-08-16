import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor() { }
  private openDrawerSubject = new BehaviorSubject<boolean>(true);

  toggleDrawer(value:boolean){
    this.openDrawerSubject.next(value);
  }

  getDrawerStatus(){
    return this.openDrawerSubject.asObservable();
  }

}
