import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:AngularFireAuth) {
  }
  login(passwprd: string,email: string) {
   return this.auth.signInWithEmailAndPassword(passwprd,email);
  }
  logout() {
    // this.auth.signOut();
  }
}
