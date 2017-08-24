import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Content } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { NgZone } from '@angular/core';

// AngularFire
import { FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { ChatProvider }  from '../../providers/chat/chat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Content) content: Content;
  messages: FirebaseListObservable<any []>;
  user: any;
  ready: boolean = false;
  newMessage: string = "";

  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth, public chat: ChatProvider, public zone: NgZone) {
  }

  ionViewWillEnter() {
    if (this.afAuth.auth.currentUser) {
        this.user = this.afAuth.auth.currentUser;
        this.chat.sendMessage(this.user.displayName + " came online!");
        this.messages = this.chat.getMessages(); 
        this.messages.subscribe(
            (event) => {
                this.scrollToBottom();
            },
            (error) => {
            },
            () => {
            }
        );
        this.afAuth.authState.subscribe(
            (auth) => {
                if (auth != null) {
                    // We are authorized
                    this.user = auth;
                } else {
                    // We are not authorized
                    this.navCtrl.setRoot( LoginPage );
                }
            }
        );
    } else {
        this.user = null;
        this.navCtrl.setRoot( LoginPage );
    }
  }

  ionViewDidEnter() {
    this.ready = true;
  }

  scrollToBottom() {
    if (this.ready) {
        setTimeout(() => { this.content.scrollToBottom(); });
    }
  }

  send() {
    this.chat.sendMessage(this.newMessage);
    this.newMessage = "";
  }

}
