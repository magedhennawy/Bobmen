/**
 * Created by Paul on 3/26/2017.
 */
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

export class SocketService {
  private url = 'https://localhost:3000';
  private socket;

  sendMessage(message){
    this.socket.emit('add-message', message);
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io.connect(this.url, {secure: true});
      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }
}
