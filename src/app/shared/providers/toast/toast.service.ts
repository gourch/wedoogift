import { Injectable } from '@angular/core';
import { Message } from '../../class/message/message';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private _list: Message[] = [];
  private _observableList: BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>([]);

  constructor() { }

  getMessages(): Observable<Message[]> {
    return this._observableList.asObservable();
  }

  sendMessage(content: string, type: string) {
    const message = new Message(content, type);
    this._list.push(message);
    this._observableList.next(this._list.slice().reverse())
    setTimeout(() => {
      this.dismissMessage(message);
    }, 5000);
  }

  dismissMessage(message: Message) {
    this._list.splice(this._list.indexOf(message), 1);
    this._observableList.next(this._list.slice().reverse());
  }
}
