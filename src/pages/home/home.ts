import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';

// AngularFire
import { FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { ChatProvider }  from '../../providers/chat/chat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  messages: FirebaseListObservable<any []>
  user: any;

  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth, public chat: ChatProvider) {
  }

  ionViewWillEnter() {
    this.afAuth.authState.subscribe(
        (auth) => {
            if (auth != null) {
                // We are authorized
                this.messages = this.chat.getMessages();
            } else {
                // We are not authorized
                this.navCtrl.setRoot( LoginPage );
            }
        }
    );
  }

  ionViewDidEnter() {
    if (this.afAuth.auth.currentUser) {
        this.user = this.afAuth.auth.currentUser;
        this.chat.sendMessage(this.user.displayName + " came online!");
    } else {
        this.user = this.afAuth.auth.currentUser;
    }
  }
}
