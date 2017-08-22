import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';

// AngularFire
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
  }

  ionViewWillEnter() {
    this.afAuth.authState.subscribe(
        (auth) => {
            if (auth != null) {
                // We are authorized
            } else {
                // We are not authorized
                this.navCtrl.setRoot( LoginPage );
            }
        }
    );
  }
}
