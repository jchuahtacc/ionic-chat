import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';

/*
  Generated class for the ChatProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ChatProvider {

  constructor(public afDb : AngularFireDatabase, public afAuth : AngularFireAuth) {
  }

  getMessages() {
    if (this.afAuth.auth.currentUser) {
        return this.afDb.list('/messages/');
    } else {
        return null;
    }
  }

  sendMessage(text) {
    if (this.afAuth.auth.currentUser) {
        let user = this.afAuth.auth.currentUser;
        let today = new Date();
        let hours = today.getHours();
        let ampm = "AM";
        if (hours == 0) {
            hours = 12;
        } else {
            if (hours > 12) {
                hours = hours % 12;
                ampm = "PM";
            }
        }
        let dateText = today.getMonth() + 1 + '/' + today.getDate() + '/' + today.getFullYear() + ' ' + hours + ":" + ("0" + today.getMinutes()).slice(-2) + ampm;
        this.afDb.list('/messages/').push({ 'text' : text, 'uid' : user.uid, 'displayName' : user.displayName, 'email' : user.email, 'date' : dateText, 'photoURL' : user.photoURL });
    }
  }
}
